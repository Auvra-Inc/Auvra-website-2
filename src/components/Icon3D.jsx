export default function Icon3D({ name, size = 80, className = '' }) {
  return (
    <svg className={`icon3d ${className}`} width={size} height={size} viewBox="0 0 96 96" aria-hidden="true" focusable="false">
      <use href={`#i-${name}`} />
    </svg>
  );
}
