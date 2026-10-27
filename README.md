# Make Your Mark

A responsive digital flyer for the November 11, 2026 TML workshop. Built with semantic HTML, CSS, and a small amount of JavaScript for the registration countdown and button.

## Preview

Open `index.html` in your browser, or run `python3 -m http.server 8000` from this folder and visit http://localhost:8000.

## Add your photos

1. Put your photo files in the `images` folder. Use simple names such as `stamp-carving.jpg`.
2. In `index.html`, replace the relevant `src="images/placeholder.svg"` with `src="images/stamp-carving.jpg"`.
3. Replace that image's empty `alt=""` with a brief description of the photo. Keep empty alt text for purely decorative images.

There are six square gallery placeholders and four workshop-step placeholders. CSS crops replacement photos to the same shapes automatically.

## Connect registration

Set `REGISTRATION_URL` at the top of `script.js` to your registration form URL. Until then, clicking Register Now shows a coming-soon message. The countdown assumes registration closes at the end of November 2, 2026, in New York; edit `registrationDeadline` if the cutoff differs.

## Publish on GitHub Pages

1. Create a GitHub repository, then upload `index.html`, `styles.css`, `script.js`, and the `images` folder (or push this folder with Git).
2. In the repository, open **Settings → Pages**.
3. Select **Deploy from a branch**, then choose **main** and **/ (root)** and save.
4. GitHub will display the published website address when deployment finishes.

## Assignment notes

The flyer follows the supplied Figma sketch: warm off-white background, blue headline, photo grid, event information, registration, and four workshop steps. HTML uses a main landmark, header, labeled sections, headings, and an ordered list. CSS controls spacing, the photo grid, typography, and responsive sizing. JavaScript updates a countdown and connects the registration button once a form URL is supplied.

For your AI process reflection, review the generated code and document what you kept, changed, and learned in your own words. Add all group members' names and your repository link to the submission document.
