const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '../public/images');

fs.readdirSync(imagesDir).forEach(file => {
  if (!file.match(/\.(png|jpe?g)$/i)) return;
  const filePath = path.join(imagesDir, file);
  const base = file.replace(/\.(png|jpe?g)$/i, '');

  // Convert to WebP
  const webpPath = path.join(imagesDir, base + '.webp');
  if (!fs.existsSync(webpPath)) {
    sharp(filePath)
      .webp({ quality: 82 })
      .toFile(webpPath)
      .then(() => console.log(`Created ${webpPath}`))
      .catch(err => console.error(`WebP error for ${file}:`, err));
  }

  // Convert to AVIF
  const avifPath = path.join(imagesDir, base + '.avif');
  if (!fs.existsSync(avifPath)) {
    sharp(filePath)
      .avif({ quality: 50 })
      .toFile(avifPath)
      .then(() => console.log(`Created ${avifPath}`))
      .catch(err => console.error(`AVIF error for ${file}:`, err));
  }
}); 