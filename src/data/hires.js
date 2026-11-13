// Photos that also have a 1600px version (generated from full-size originals).
export const HIRES = new Set(["africa-book", "beadwork", "carnival", "coral-beads", "creator-beach", "creator-filmcrew", "creator-filmmaker", "creator-painter", "creator-studio", "crowd", "dancers", "drum-flag", "drum-street", "drummer-blue", "drummers-row", "durbar", "elder", "elder-drummer", "elder-hands", "emir", "face-paint", "gele", "hands-archive", "hands-braid", "kids-running", "mask", "masquerade", "museum", "photo-archive", "procession", "reading-mum", "red-cap", "sculpture", "shrine", "singers", "village", "warrior-dance", "white-agbada", "young-man"]);

export const HIRES2 = new Set(["beadwork", "coral-beads", "crowd", "drummer-blue", "durbar", "elder", "hands-archive", "hands-braid", "museum", "procession", "singers", "young-man"]);

// srcset for a photo name: 480 / 960 and, when available, 1600.
export const photoSrcset = (name) => `/images/photos/${name}-480.webp 480w, /images/photos/${name}-640.webp 640w, /images/photos/${name}-960.webp 960w${HIRES.has(name) ? `, /images/photos/${name}-1600.webp 1600w` : ''}${HIRES2.has(name) ? `, /images/photos/${name}-2400.webp 2400w` : ''}`;
