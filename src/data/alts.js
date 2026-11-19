// Descriptions for images that are used as illustration around the site, so every image has useful alt text.
// Keep each under 125 characters and describe what the image shows.
export const ALT = {
  // Photographs
  carnival: 'Dancers in bright red, yellow and green costumes parading down a tree-lined street',
  'creator-filmcrew': 'A small film crew reviewing footage together on set',
  'drum-flag': 'Two men standing beside a large ceremonial drum painted in red, green and white',
  durbar: 'A horseman in embroidered robes riding a decorated horse at a durbar festival',
  'elder-hands': 'An elder wearing a beaded headband, seen in profile',
  'face-paint': 'Two people with white painted patterns on their faces and beaded jewellery, embracing',
  shrine: 'A man in an orange robe and beads with his arms raised at a community gathering',
  village: 'An aerial view of rooftops, trees and a red earth road in a village',
  beadwork: 'A smiling woman wearing a red gele and coral beadwork',
  'coral-beads': 'Women wearing coral bead necklaces and red headwear at a festival',
  'dancer-feathers': 'A performer in a feathered costume mid-dance',
  'dancer-wheel': 'A dancer framed by a large feathered fan costume',
  dancers: 'Dancers in raffia costumes performing outdoors',
  'drum-street': 'Drummers playing together in the street',
  'drummers-row': 'Men playing large drums in a street procession',
  elder: 'An elder in a feathered cap at a ceremony',
  'hands-archive': 'Hands turning the pages of an archive',
  'hands-braid': 'An older hand braiding a child’s hair',
  mask: 'A person in a carved wooden mask and woven cloth',
  masquerade: 'A performer with blue face paint and a horned headdress at a festival',
  procession: 'Men in traditional robes, caps and coral beads walking together in a procession',
  'red-cap': 'A man in a red cap and coral beads at a festival',
  sculpture: 'A man shaping a carved wooden sculpture beside a lake',
  singers: 'Women in patterned cloth singing together at a community gathering',
  'white-agbada': 'A man in a white agbada, coral beads and a patterned wrapper',
  museum: 'Columns of a national museum building',
  // Objects
  'benin-mask': 'A dark carved ceremonial mask with an ornate crown and collar',
  'ceramic-2': 'A handmade white ceramic bowl with a wavy rim',
  'ceramic-3': 'A glazed brown ceramic bowl tilted on its side',
  'ceramic-4': 'A shallow glazed stoneware bowl',
  'clay-2': 'A fragment of dark stone carved with symbols and a spiral',
  'clay-3': 'A patterned clay vessel with two handles and a narrow neck',
  'stone-10': 'A round pale stone disc with a heart-shaped opening',
  'stone-2': 'A weathered pale ceramic jug with a broken side',
  'stone-3': 'A fragment of a carved stone face',
  'stone-6': 'A small weathered stone figure with a simple face',
  'stone-7': 'A pale stone spearhead',
  'stone-9': 'A carved pale stone hand',
  // Collage illustrations
  camera: 'Collage illustration of a vintage film camera',
  'chess-knight': 'Collage illustration of a black chess knight',
  coin: 'Collage illustration of an old coin with a portrait',
  globe: 'Collage illustration of a desk globe',
  key: 'Collage illustration of an ornate antique key',
  magnifier: 'Collage illustration of a magnifying glass over a document',
  'paper-plane': 'Collage illustration of a folded paper plane',
  'pocket-watch': 'Collage illustration of an antique pocket watch',
  // Woven rugs
  lemons: 'A woven rug with a lemon design in yellow, red and blue',
  lizard: 'A dark green woven rug with a lizard design',
  oranges: 'A blue woven rug with an orange tree design',
  'tiger-flowers': 'An orange woven rug with a tiger among flowers',
  'tiger-palms': 'A red woven rug with a tiger beneath palm trees',
};

const MOODS = ['Elegant', 'Mysterious', 'Comedic', 'Natural', 'Bright', 'Technical', 'Effortless', 'Calm', 'Scientific'];
export const moodAlt = (i) => `Abstract colour texture labelled “${MOODS[i] || 'Mood'}”`;

// altFor('creator-filmcrew') or altFor('/images/photos/creator-filmcrew-640.webp')
export function altFor(nameOrSrc, fallback = '') {
  const key = String(nameOrSrc).split('/').pop().replace(/\.\w+$/, '').replace(/-\d{3,4}$/, '');
  return ALT[key] || fallback;
}
