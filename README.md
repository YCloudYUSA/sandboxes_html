# YMCA CodeShare Sandboxes landing page

## Source

### Design wireframes

https://xd.adobe.com/view/4c680fc3-feba-4ad1-409f-09efedcd66ac-3a59/

There are 3 variations:
- Mobile Phone (MIN)
- Mobile Tablet
- Desktop (Fixed MAX)

### Images

https://drive.google.com/drive/folders/1j40bjO1l7fD7M6w3QEEcgkkLHZB7N8hn?usp=sharing

### Page text

```
Sandbox

Welcome to the YMCA CodeShare demo site! Compare the three themes currently offered on YMCA CodeShare and discover the range of
capabilities across different installation levels of the platform. 
```

### Sandbox Domain Names

- sandboxes.y.org

- sandbox-carnation-cus.y.org
- sandbox-carnation-ext.y.org
- sandbox-carnation-std.y.org

- sandbox-lily-cus.y.org
- sandbox-lily-ext.y.org
- sandbox-lily-std.y.org

- sandbox-rose-cus.y.org
- sandbox-rose-ext.y.org
- sandbox-rose-std.y.org

### Header

The logo and "back to YMCA CodeShare.org" point to https://ycloud.y.org/open-y-association-websites/.

The logo is to be taken from openy.org. 

The header is sticky for desktops.

### Fonts

The used fonts:

- Quicksand, regular
- Quicksand, bold
- Roboto, regular
- Roboto, medium

The fonts are to be taken from Google fonts.

### Theme palette

- black #000000
- white #FFFFFF
- red #F41938 (+ #D0343A for contrast with white)
- light-grey #F2F2F2

# Development

## Approach

The responsive layout.

The mobile first approach is to be used.

The page is to be built with Bootstrap 4.

Webpack is to be used to provide development environment and build production artifacts.

## Usage

Project installation:

`npm install`

To start local environment:

`npm start`

To build production artifacts:

`npm run build`

## Project structure

- `webpack.*.js` - the Webpack configuration files;
- `src/` - contains all the source files for the project:
   - `index.handlebars` - the root Handlebars file for building `index.html`;
   - `main.scss` - the root SCSS file for building `main.css`;
   - `data.json` - contains the page content;
   - `assets/` - all the images used in the page;
   - `partials/` - contains Handlebars component templates;
   - `scss/` - contains SCSS modules.

### data.json

The file describes all the content needed to build the static page.

Structure:

- `title` - the page title, used in meta tags;
- `description` - the page description, used in meta tags, must not exceed 155 characters;
- `url` - the URL where this page is hosted, used in meta tags;
- `header` - the content header (see the wireframes);
- `intro` - the intro text (see the wireframes), non-sanitized, can contain HTML markup;
- `cards` - the array of card objects, used to build the markup for cards:
  - `id` - the card id, used as a HTML `id` attribute, used in CSS;
  - `link` - a link to a sandbox website, used in the "Preview" links;
  - `title` - a card title, e.g "Rose: Standard install";
  - `description` - a card body content, non-sanitized, can contain HTML markup.

## TODOs

- [NORMAL] improve IE11 rendering;
- [MINOR] migrate to Gatsby;
- [MINOR] automate removing of `main.js` from the build artifact `dist/index.html`.
