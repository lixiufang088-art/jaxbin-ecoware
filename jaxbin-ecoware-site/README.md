## Jaxbin Ecoware Website Package V3

# Jaxbin Ecoware B2B Independent Website

This is a complete static website package designed for GitHub Pages. It has no build step and no external framework dependency.

## Included

- English B2B homepage focused on inquiries
- 25-product searchable and filterable catalog
- 25 SEO-friendly static product detail pages
- OEM/private-label, solutions, factory and sustainability pages
- 6 original buyer-guide articles
- Quote basket stored in the visitor's browser
- Inquiry forms that open the visitor's email app
- Print / Save-as-PDF product catalog
- Responsive layout, sitemap, robots.txt, manifest and 404 page
- Original vector product illustrations and your supplied Jaxbin logo

## Deploy to GitHub Pages

1. Create a new GitHub repository, for example `jaxbin-website`.
2. Unzip this package and upload **all files and folders inside `jaxbin-ecoware-site`** to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.
6. GitHub will provide a public Pages URL after deployment.

## Connect jaxbin.com

1. Add a file named `CNAME` in the root containing only:
   `jaxbin.com`
2. In the DNS manager for the domain, follow the current GitHub Pages custom-domain instructions.
3. Enable HTTPS in GitHub Pages settings after DNS verification.

## Update contact information

Edit `assets/js/site-config.js`:

```js
window.JAXBIN_CONFIG={
  email:'info@jaxbin.com',
  brand:'Jaxbin Ecoware',
  siteUrl:'https://jaxbin.com'
};
```

Also search the HTML files for `info@jaxbin.com` if the public email changes.

## Make the inquiry form submit without an email app

The starter form uses `mailto:` because GitHub Pages cannot process server-side forms. To collect submissions directly, connect Formspree, Web3Forms, Basin, a CRM form or your own API endpoint. Update the submit logic in `assets/js/app.js` and review the privacy policy.

## Replace illustrations with real product photos

The site includes original SVG product illustrations so the package is self-contained and copyright-safe. Replace images in `assets/images/sections/` with approved Jaxbin product and factory photos before major ad campaigns. Keep filenames, or update the corresponding HTML image paths.

Recommended photo set:

- White-background image for each core SKU
- In-use foodservice image
- Size/specification image
- Packing and carton image
- Production, inspection, warehouse and loading images
- OEM sleeve/label/retail pack examples

## Local preview

From the website folder, run:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Launch checks

- Confirm every factual company claim.
- Replace illustrative factory image with real approved photos.
- Confirm the actual certification/test-document status for each product.
- Connect a working form endpoint and test it.
- Add Analytics and Search Console only after updating privacy/cookie disclosures.
- Confirm canonical domain and regenerate sitemap if the domain changes.
- Compress real JPG/PNG photos to WebP or AVIF.
