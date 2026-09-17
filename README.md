# Silicon Systems & Securities — Premium React Website

A premium multi-page React + Vite + Tailwind CSS website for Silicon Systems & Securities.

## Pages
- `/` Home
- `/about` About Us
- `/services` Services
- `/services/:service` Individual service pages
- `/solutions` Solutions
- `/contact` Contact

## Structure
```text
src/
  components/
    CTA.jsx
    Footer.jsx
    Header.jsx
    Layout.jsx
    Logo.jsx
    PageHero.jsx
    ScrollToTop.jsx
    SectionTitle.jsx
  data/
    siteData.js
  pages/
    Home.jsx
    About.jsx
    Services.jsx
    ServiceDetail.jsx
    Solutions.jsx
    Contact.jsx
    NotFound.jsx
  App.jsx
  index.css
  main.jsx

public/
  images/
  Hero.png
  Mobilehero.png
  logo.jpeg
  .htaccess
```

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

The included `.htaccess` supports client-side routes on Apache/Hostinger by redirecting non-file routes to `index.html`.


### Page-specific imagery
Home keeps the supplied Hero.png/Mobilehero.png. All inner pages now use dedicated visual assets in public/images, including About, Services, Solutions, Contact, and each service detail page.


## Visual & content note
The non-home page artwork in `public/images/` is original SVG artwork created specifically for this project. It is not copied from stock-image libraries. The page copy was written specifically for Silicon Systems & Securities and is not copied from another website.
