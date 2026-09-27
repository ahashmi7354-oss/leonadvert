import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Design the official Leon Advert icon SVG
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0e1a" />
      <stop offset="50%" stop-color="#070913" />
      <stop offset="100%" stop-color="#030408" />
    </linearGradient>

    <!-- Outer Border Gradient -->
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.8" />
      <stop offset="40%" stop-color="#3b82f6" stop-opacity="0.6" />
      <stop offset="80%" stop-color="#6366f1" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.9" />
    </linearGradient>

    <!-- Shield Primary Gradient -->
    <linearGradient id="shieldGrad" x1="10%" y1="0%" x2="90%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#2563eb" />
      <stop offset="100%" stop-color="#4f46e5" />
    </linearGradient>

    <!-- Shield Inner Fill Gradient -->
    <radialGradient id="shieldFill" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.6" />
      <stop offset="60%" stop-color="#0f172a" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#060913" stop-opacity="0.95" />
    </radialGradient>

    <!-- Neon Accent Gradient -->
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#67e8f9" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>

    <!-- Golden/Amber Tech Core -->
    <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="50%" stop-color="#67e8f9" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>

    <!-- Subtle Drop Shadow Filter -->
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="10" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="24" result="blur" />
      <feColorMatrix type="matrix" values="
        0 0 0 0 0
        0 0.8 0 0 0.94
        0 0 1 0 1
        0 0 0 0.6 0" />
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Squircle Base with Deep Obsidian Fill -->
  <rect x="16" y="16" width="480" height="480" rx="116" fill="url(#bgGrad)" />

  <!-- Outer Ambient Radial Highlights -->
  <circle cx="140" cy="120" r="160" fill="#2563eb" opacity="0.22" filter="url(#softGlow)" />
  <circle cx="360" cy="380" r="140" fill="#06b6d4" opacity="0.18" filter="url(#softGlow)" />

  <!-- Border Ring -->
  <rect x="16" y="16" width="480" height="480" rx="116" fill="none" stroke="url(#borderGrad)" stroke-width="12" />

  <!-- Inner Cyber Crest / Shield Container -->
  <path d="M 256,76 
           C 340,76 404,116 404,184 
           C 404,300 320,404 256,436 
           C 192,404 108,300 108,184 
           C 108,116 172,76 256,76 Z" 
        fill="url(#shieldFill)" 
        stroke="url(#shieldGrad)" 
        stroke-width="16" 
        stroke-linejoin="round"
        filter="url(#glow)" />

  <!-- Inner Geometric Tech Chevron / Facets -->
  <path d="M 256,120 L 356,192 C 356,280 292,356 256,388 C 220,356 156,280 156,192 Z" 
        fill="none" 
        stroke="url(#accentGrad)" 
        stroke-width="6" 
        stroke-dasharray="14 8"
        opacity="0.45" />

  <!-- Stylized Geometric "L" & Cyber Compass Arm -->
  <!-- Bold dynamic 'L' in neon cyan and electric blue -->
  <path d="M 256,140 
           L 256,268 
           L 328,340 
           L 302,364 
           L 220,282 
           L 220,140 Z" 
        fill="url(#accentGrad)" 
        filter="url(#glow)" />

  <!-- Ascending Growth Arrow / Diamond Crest on Right -->
  <path d="M 256,140 
           L 296,204 
           L 256,236 
           L 216,204 Z" 
        fill="url(#shieldGrad)" 
        opacity="0.8" />

  <!-- Central Luminous Core Star / Pulse Node -->
  <circle cx="256" cy="256" r="28" fill="#070a16" stroke="url(#accentGrad)" stroke-width="8" />
  <circle cx="256" cy="256" r="14" fill="url(#starGrad)" filter="url(#glow)" />

  <!-- Tech Accent Orbit Points -->
  <circle cx="256" cy="140" r="7" fill="#67e8f9" />
  <circle cx="328" cy="340" r="7" fill="#67e8f9" />
  <circle cx="184" cy="192" r="5" fill="#38bdf8" opacity="0.8" />
  <circle cx="328" cy="192" r="5" fill="#38bdf8" opacity="0.8" />
</svg>`;

// Function to assemble multi-size ICO buffer from PNG buffers
function createIco(images) {
  // images: array of { width, height, buffer }
  const count = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = count * dirEntrySize;
  let currentOffset = headerSize + dirSize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type: 1 = ICO
  header.writeUInt16LE(count, 4); // Number of images

  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // Color palette (0 = no palette)
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // Size of image data
    entry.writeUInt32LE(currentOffset, 12); // Offset to image data

    entries.push(entry);
    currentOffset += img.buffer.length;
  }

  return Buffer.concat([
    header,
    ...entries,
    ...images.map(img => img.buffer)
  ]);
}

async function run() {
  console.log("Generating Leon Advert favicons & icons...");

  const svgBuffer = Buffer.from(svgIcon);

  // 1. Save SVG icons
  const publicDir = path.join(rootDir, 'public');
  const appDir = path.join(rootDir, 'src', 'app');

  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgIcon);
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgIcon);
  fs.writeFileSync(path.join(appDir, 'icon.svg'), svgIcon);
  console.log("Saved SVG icons to public and app directory.");

  // 2. Generate PNGs of multiple sizes
  const sizes = [16, 32, 48, 64, 180, 192, 512];
  const pngBuffers = {};

  for (const size of sizes) {
    pngBuffers[size] = await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toBuffer();
    console.log(`Generated ${size}x${size} PNG`);
  }

  // Save Apple Touch Icon (180x180)
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), pngBuffers[180]);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), pngBuffers[180]);

  // Save Web App Manifest Icons (192 and 512)
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), pngBuffers[192]);
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), pngBuffers[512]);

  // 3. Assemble ICO file containing 16x16, 32x32, 48x48
  const icoImages = [
    { width: 16, height: 16, buffer: pngBuffers[16] },
    { width: 32, height: 32, buffer: pngBuffers[32] },
    { width: 48, height: 48, buffer: pngBuffers[48] }
  ];
  const icoBuffer = createIco(icoImages);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log("Saved multi-res favicon.ico to public and app directory.");

  console.log("Favicon generation complete!");
}

run().catch(err => {
  console.error("Error generating favicons:", err);
  process.exit(1);
});
