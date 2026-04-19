# HighFiveFriday Boostrap theme

[Bootstrap 5](https://www.drupal.org/project/bootstrap5) subtheme.

## Development.

### CSS compilation.

Prerequisites: Node.js installed on your machine.

From the subtheme directory, install dependencies once:

```bash
npm install
```

Then:

- `npm run build` — compile SCSS to CSS (run before committing)
- `npm run watch` — recompile automatically while editing SCSS

The build output is compressed/minified. To get readable CSS for debugging, remove `--style=compressed` from the `build` script in `package.json`.
