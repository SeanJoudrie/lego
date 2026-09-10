#!/usr/bin/env python3
"""
Identify a minifigure piece by piece, from photos you already have.

    python3 tools/breakdown.py images/claws-01.jpg
    python3 tools/breakdown.py images/*.jpg --out PARTS-BREAKDOWN.md

How it works: Brickognize's "parts" endpoint refuses whole minifigures, but
happily identifies a single piece. So this asks the "figs" endpoint where the
figure is in the frame, slices that box into regions, and sends each region
to "parts" separately.

Needs Pillow (pip install pillow). Everything else is stdlib.
"""
import sys, json, time, mimetypes, urllib.request, uuid, os
from PIL import Image

API = "https://api.brickognize.com/predict"

# fractions of the figure's bounding box: (name, top, bottom, left, right)
REGIONS = [
    ("head",       0.00, 0.34, 0.00, 1.00),
    ("torso",      0.30, 0.66, 0.18, 0.82),
    ("legs",       0.62, 1.00, 0.00, 1.00),
]
# Arms are left out on purpose: in these photos they hang at the figure's side,
# half-occluded and usually unprinted, and the crops produced confident
# nonsense. Photograph an arm loose and use tools/identify.js --type parts.

def post_image(endpoint, data, filename):
    b = uuid.uuid4().hex
    body = (f'--{b}\r\nContent-Disposition: form-data; name="query_image"; '
            f'filename="{filename}"\r\nContent-Type: image/jpeg\r\n\r\n').encode() \
           + data + f'\r\n--{b}--\r\n'.encode()
    req = urllib.request.Request(endpoint, data=body,
        headers={"Content-Type": f"multipart/form-data; boundary={b}"})
    with urllib.request.urlopen(req, timeout=90) as r:
        return json.load(r)

def jpeg_bytes(im):
    from io import BytesIO
    buf = BytesIO(); im.convert("RGB").save(buf, "JPEG", quality=92)
    return buf.getvalue()

def breakdown(path, out):
    name = os.path.basename(path)
    out.append(f"\n### {name}\n")
    im = Image.open(path)

    try:
        bb = post_image(f"{API}/figs/", jpeg_bytes(im), name)["bounding_box"]
    except Exception as e:
        out.append(f"    could not locate a figure: {e}\n"); return
    if not bb.get("image_width"):
        out.append("    no figure found in this photo "
                   "(group shots and odd formats often fail here)\n"); return

    sx, sy = im.width / bb["image_width"], im.height / bb["image_height"]
    L, U, R, Lo = bb["left"]*sx, bb["upper"]*sy, bb["right"]*sx, bb["lower"]*sy
    w, h = R - L, Lo - U

    for label, t, b_, l, r in REGIONS:
        crop = im.crop((int(L + w*l), int(U + h*t), int(L + w*r), int(U + h*b_)))
        if crop.width < 24 or crop.height < 24:
            continue
        try:
            items = post_image(f"{API}/parts/", jpeg_bytes(crop), "crop.jpg").get("items", [])
        except Exception as e:
            out.append(f"    {label:10} request failed: {e}"); continue
        if not items:
            out.append(f"    {label:10} —")
        else:
            i = items[0]
            flag = "" if i["score"] >= 0.70 else "   (low confidence)"
            out.append(f"    {label:10} {i['score']*100:3.0f}%  {i['id']:14} {i['name']}{flag}")
        time.sleep(0.6)

if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    outfile = None
    if "--out" in sys.argv:
        outfile = sys.argv[sys.argv.index("--out") + 1]
        args = [a for a in args if a != outfile]
    if not args:
        print(__doc__); sys.exit(1)

    lines = ["# Piece-by-piece breakdown", "",
             "Each figure's photo sliced into regions and identified separately.",
             "Guesses, not facts — confirm before trusting.", ""]
    for p in args:
        breakdown(p, lines)
        if not outfile: print("\n".join(lines[-8:]))
    if outfile:
        open(outfile, "w").write("\n".join(lines) + "\n")
        print(f"wrote {outfile}")
