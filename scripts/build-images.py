"""Resize source photos into WebP sizes for the site.
Usage: python3 scripts/build-images.py [source_dir]
Source defaults to ../Auvra-Website/public (the current site's photo set)."""
import os, sys
from PIL import Image, ImageOps

SRC = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(__file__), '..', '..', 'Auvra-Website', 'public')
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'photos')
os.makedirs(OUT, exist_ok=True)

PHOTOS = {  # output name: source file
  'durbar': 'pexels-24.jpg', 'emir': 'pexels-6.jpg', 'elder-drummer': 'pexels-7.jpg',
  'drummer-blue': 'pexels-14.jpg', 'beadwork': 'pexels-11.jpg', 'gele': 'pexels-13.jpg',
  'coral-beads': 'pexels-16.jpg', 'red-cap': 'pexels-17.jpg', 'white-agbada': 'pexels-18.jpg',
  'masquerade': 'pexels-23.jpg', 'mask': 'pexels-3.jpg', 'drums': 'pexels-4.jpg',
  'shrine': 'pexels-5.jpg', 'dancers': 'pexels-2.jpg', 'singers': 'pexels-21.jpg',
  'procession': 'pexels-12.jpg', 'young-man': 'pexels-19.jpg', 'sculpture': 'pexels-20.jpg',
  'carnival': 'pexels-25.jpg', 'elder': 'pexels-1.jpg', 'beaded-hair': '1img.jpg',
  'drum-street': 'pexels-10.jpg', 'face-paint': 'hassan-kibwana-G85LQv2dj2o-unsplash.jpg',
  'hands-braid': 'connecting.jpg', 'hands-archive': 'collection.jpg', 'drummers-row': 'pexels-8.jpg',
  'crowd': 'pexels-15.jpg', 'village': 'living.jpg', 'museum': 'national-meseum.jpg',
}
SIZES = (480, 960)
for name, src in PHOTOS.items():
    path = os.path.join(SRC, src)
    if not os.path.exists(path):
        print('missing', path); continue
    im = ImageOps.exif_transpose(Image.open(path)).convert('RGB')
    for w in SIZES:
        t = im.copy(); t.thumbnail((w, w * 2), Image.LANCZOS)
        t.save(os.path.join(OUT, f'{name}-{w}.webp'), 'WEBP', quality=72, method=6)
    print(name, im.size)
