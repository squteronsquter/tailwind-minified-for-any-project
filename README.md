# How to install and configure

```
mkdir ~/Sites/tailwind/any-tw
cd ~/Sites/tailwind/any-tw
touch index.html
mkdir tailwind
cd tailwind
npm init -y
npm install -d tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init --full
mv tailwind.config.js tailwind-default.config.js
npx tailwindcss init
```
## Create a css file for tailwindcss in the tailwind folder

```
touch tailwind.css
```


## Add these 3 lines to tailwind.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Add scripts inside package.json

```
{
  "name": "tailwind",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-css": "tailwindcss build tailwind.css -o ../app.css",
    "watch-css": "tailwindcss -i tailwind.css -o ../app.css --watch",
    "prod-css": "tailwindcss -i tailwind.css -o ../app.min.css --minify"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.4",
    "tailwindcss": "^2.2.19"
  }
}


  ```

## Configure tailwindcss with postcss inside tailwind.config.js

```
module.exports = {
  mode: 'jit',
  purge: ['../*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

```

## Run scripts to generate or regenerate css files

```
npm run start-css
npm run watch-css
npm run prod-css
```

## That's it!

