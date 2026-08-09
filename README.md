# My Art Gallery

A personal web app to track paintings and sculptures with images and stories.

## Features
- View artworks organized by artist
- Add new artworks one at a time
- Store images and detailed stories
- Access from any device via the web

## Deployment to Vercel (Free)

1. **Create a GitHub account** (if you don't have one): https://github.com/signup
2. **Create a new repository** called `art-gallery`
3. **Push these files** to your GitHub repository
4. **Go to Vercel**: https://vercel.com
5. **Sign in with GitHub** and import the `art-gallery` repository
6. **Click Deploy** — Vercel will automatically configure it
7. **Get your URL** — Vercel will give you a live URL like `https://art-gallery-abc123.vercel.app`

That's it! Your app will be live and accessible from any device.

## Local Development

```bash
npm install
npm start
```

Then open http://localhost:3000 in your browser.

## How to Use

1. Click **"+ Add artwork"** to add a new piece
2. Fill in the title, artist name, year, upload an image, and write the story
3. Click **Save artwork**
4. Browse your gallery by clicking on artists' names
5. Click on a painting to see the full card
6. Click the image to see it fullscreen

## Data Storage

Currently, data is stored in the server's memory and will reset when the server restarts. For permanent storage, consider adding a database like MongoDB.
