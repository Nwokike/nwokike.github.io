# nwokike.github.io

Personal portfolio and CV for Onyeka Nwokike.

## Structure

- `index.html` — home page: work, research, about, contact
- `services.html` — services and FAQ
- `404.html` — not-found page
- `css/style.css` — design tokens, layout, components
- `js/script.js` — theme, mobile menu, work filters, reveal, FAQ
- `images/work/` — project thumbnails used on the home page
- `images/` — portrait, social image, favicons
- `cv/CV_ONYEKA_NWOKIKE.tex` — CV source (LaTeX)
- `pdfs/CV_ONYEKA_NWOKIKE.pdf` — compiled CV linked from the site

## Updating the CV

The CV is generated from `cv/CV_ONYEKA_NWOKIKE.tex`. Edit the `.tex` file, then rebuild:

With [Tectonic](https://tectonic-typesetting.github.io/) (downloads packages on first run):

```bash
tectonic -X compile cv/CV_ONYEKA_NWOKIKE.tex --outdir cv
cp cv/CV_ONYEKA_NWOKIKE.pdf pdfs/CV_ONYEKA_NWOKIKE.pdf
```

With TeX Live:

```bash
pdflatex -output-directory cv cv/CV_ONYEKA_NWOKIKE.tex
cp cv/CV_ONYEKA_NWOKIKE.pdf pdfs/CV_ONYEKA_NWOKIKE.pdf
```

Run the compile twice if page references move.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open <http://127.0.0.1:8000/>.

## Notes

- The work grid is a selection, not a full archive. Update the `Updated <month> <year>` line when the selection changes.
- Project thumbnails live in `images/work/`. Keep the 4:3 ratio (1200x900) so cards stay aligned.
- Outbound links are plain anchors; no build step or framework is required.
