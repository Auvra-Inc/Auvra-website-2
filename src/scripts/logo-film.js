// Logo film background: dunes at dusk, drawn per pixel on the GPU so every edge and gradient is sharp at any size.
// One small fragment shader; it only runs while the scene is on screen, and draws a single still frame for reduced motion.
const FRAG = `
precision highp float;
uniform vec2 r; uniform float t;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float ridge(float x, float f, float sp, float ph) {
  return sin(x * f + t * sp + ph) * 0.6 + sin(x * f * 0.53 - t * sp * 0.7 + ph * 1.7) * 0.4;
}
float bump(float x, float w) { float d = (x - 0.5); return exp(-d * d / w); }
void main() {
  vec2 uv = gl_FragCoord.xy / r; float x = uv.x, y = uv.y; float asp = r.x / r.y;

  // Sky and low sun
  vec3 col = mix(vec3(0.455, 0.490, 0.510), vec3(0.420, 0.455, 0.480), y);
  float sd = length(vec2((x - 0.5) * min(asp, 1.9) * 0.60, (y - 1.04)));
  float sun = smoothstep(0.66, 0.06, sd) * (0.92 + 0.08 * sin(t * 0.9));
  col = mix(col, vec3(0.925, 0.890, 0.790), sun);

  // Far haze: pale peach
  float h1 = 0.770 + 0.042 * ridge(x, 9.5, 0.80, 0.0) + 0.014 * sin(t * 1.1);
  float d1 = h1 - y;
  col = mix(col, mix(vec3(0.992, 0.890, 0.820), vec3(0.965, 0.800, 0.705), smoothstep(0.0, 0.16, d1)), smoothstep(-0.045, 0.045, d1));

  // Middle haze: salmon, with a hill that swells in the centre
  float h2 = 0.700 + 0.046 * ridge(x, 7.4, -0.95, 2.1) + 0.060 * bump(x, 0.030) * (0.5 + 0.5 * sin(t * 1.4));
  float d2 = h2 - y;
  col = mix(col, mix(vec3(0.940, 0.640, 0.530), vec3(0.985, 0.835, 0.745), smoothstep(0.0, 0.17, d2)), smoothstep(-0.040, 0.040, d2));

  // Near dune (front): rises and sinks slowly
  float hF = 0.17 + 0.17 * sin(t * 0.85) + 0.070 * ridge(x, 5.0, 0.75, 4.0) + 0.06 * (x - 0.5) * sin(t * 0.55);

  // Back dune: dark body with a dip that opens in the centre; it glows purple, then rose, where it meets the near dune
  float hB = 0.635 + 0.022 * sin(t * 1.0 + 1.0) + 0.050 * ridge(x, 6.6, 1.00, 1.2) - 0.080 * bump(x, 0.035) * (0.5 + 0.5 * sin(t * 1.4 + 1.6));
  float dB = hB - y;
  float up = max(y - hF, 0.0);
  vec3 dark = vec3(0.180, 0.135, 0.075);
  vec3 body = dark;
  body = mix(body, vec3(0.270, 0.215, 0.420), exp(-up / 0.200));
  body = mix(body, vec3(0.560, 0.370, 0.580), exp(-up / 0.085) * 0.90);
  body = mix(body, vec3(0.975, 0.760, 0.710), exp(-up / 0.030) * 0.70);
  body = mix(body, dark, smoothstep(0.10, 0.0, dB) * 0.9);           // keep the ridge itself dark and crisp
  col = mix(col, body, smoothstep(-0.014, 0.014, dB));
  col += vec3(0.30, 0.16, 0.20) * exp(-abs(dB) / 0.012) * 0.22;      // thin warm rim light on the ridge

  // Near dune
  float dF = hF - y;
  col = mix(col, dark, smoothstep(-0.012, 0.012, dF));

  // Fine film grain
  float g = hash(gl_FragCoord.xy + floor(t * 14.0) * 17.0) - 0.5;
  col += g * 0.045;
  gl_FragColor = vec4(col, 1.0);
}`;
const VERT = 'attribute vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }';

export default function startFilm(canvas, reduce) {
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
  if (!gl) return;
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
  const prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG)); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uR = gl.getUniformLocation(prog, 'r'), uT = gl.getUniformLocation(prog, 't');

  const size = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.max(1, Math.round(canvas.clientWidth * dpr)), h = Math.max(1, Math.round(canvas.clientHeight * dpr));
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; gl.viewport(0, 0, w, h); }
  };
  let time = 0, last = 0, raf = 0, visible = false;
  const draw = (now) => {
    raf = 0;
    if (last) time += Math.min(now - last, 60) / 1000;
    last = now;
    size(); gl.uniform2f(uR, canvas.width, canvas.height); gl.uniform1f(uT, time); gl.drawArrays(gl.TRIANGLES, 0, 3);
    canvas.classList.add('is-live');
    if (visible && !reduce && !document.hidden) raf = requestAnimationFrame(draw);
  };
  const kick = () => { if (!raf) { last = 0; raf = requestAnimationFrame(draw); } };
  time = 2.4; // start on a pleasing frame
  new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (visible) kick(); }, { rootMargin: '10% 0px' }).observe(canvas);
  new ResizeObserver(() => { if (!raf) kick(); }).observe(canvas);
  document.addEventListener('visibilitychange', () => { if (visible) kick(); });
  canvas.addEventListener('webglcontextlost', (e) => e.preventDefault());
}
