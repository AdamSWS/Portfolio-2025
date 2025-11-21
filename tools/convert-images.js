#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const src = path.join(__dirname, '..', 'public', 'me.jpg')
const outWebp = path.join(__dirname, '..', 'public', 'me.webp')
const outAvif = path.join(__dirname, '..', 'public', 'me.avif')

async function main(){
  try{
    const sharp = require('sharp')
    if(!fs.existsSync(src)){
      console.log('Source image not found:', src)
      process.exit(1)
    }

    console.log('Converting', src)
    await sharp(src).resize(800).webp({quality: 80}).toFile(outWebp)
    console.log('Wrote', outWebp)
    await sharp(src).resize(800).avif({quality: 50}).toFile(outAvif)
    console.log('Wrote', outAvif)
    console.log('Done. Update references to use optimized images where appropriate.')
  }catch(e){
    console.log('\nImage conversion helper requires the `sharp` package.')
    console.log('Install it with:')
    console.log('  npm install -D sharp')
    console.log('\nThen run:')
    console.log('  npm run convert-images')
    process.exit(1)
  }
}

main()
