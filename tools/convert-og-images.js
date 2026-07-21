#!/usr/bin/env node
const path = require('path')

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images')
const FILES = ['og', 'og-fisherai', 'og-vibeai', 'og-causal-effect-query']

async function main() {
  const sharp = require('sharp')
  for (const name of FILES) {
    const src = path.join(IMAGES_DIR, `${name}.svg`)
    const out = path.join(IMAGES_DIR, `${name}.png`)
    await sharp(src).resize(1200, 630).png().toFile(out)
    console.log('Wrote', out)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
