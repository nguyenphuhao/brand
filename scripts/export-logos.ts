import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const OUT = join(process.cwd(), "public", "logos");
mkdirSync(OUT, { recursive: true });

type Variant = { name: string; bg: string; ball: string; ballOpacity: number; play: string; seamStroke: string; seamOpacity: number; orbit: string; dot: string };

const variants: Variant[] = [
  { name: "dark", bg: "#1A1A2E", ball: "#0D9488", ballOpacity: 1, play: "white", seamStroke: "white", seamOpacity: 0.2, orbit: "#FFB347", dot: "#FF6B35" },
  { name: "light", bg: "#F0FDFA", ball: "#0D9488", ballOpacity: 1, play: "#F0FDFA", seamStroke: "#0A7E73", seamOpacity: 0.3, orbit: "#FFB347", dot: "#FF6B35" },
  { name: "white", bg: "white", ball: "#0D9488", ballOpacity: 1, play: "white", seamStroke: "white", seamOpacity: 0.3, orbit: "#FFB347", dot: "#FF6B35" },
  { name: "teal", bg: "#0D9488", ball: "white", ballOpacity: 0.95, play: "#0D9488", seamStroke: "#0D9488", seamOpacity: 0.25, orbit: "#FFB347", dot: "#FF6B35" },
];

function makeSvg(v: Variant, size: number): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 90 86" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="90" height="86" fill="${v.bg}"/>
  <ellipse cx="45" cy="43" rx="36" ry="11" stroke="${v.orbit}" stroke-width="2.5" transform="rotate(-18 45 43)"/>
  <circle cx="45" cy="43" r="22" fill="${v.ball}" opacity="${v.ballOpacity}"/>
  <path d="M33,25 Q45,43 33,61" stroke="${v.seamStroke}" stroke-width="1.5" opacity="${v.seamOpacity}"/>
  <path d="M57,25 Q45,43 57,61" stroke="${v.seamStroke}" stroke-width="1.5" opacity="${v.seamOpacity}"/>
  <polygon points="38,32 38,54 58,43" fill="${v.play}"/>
  <circle cx="11" cy="33" r="4.5" fill="${v.dot}"/>
  <circle cx="79" cy="53" r="4.5" fill="${v.dot}"/>
</svg>`;
}

function makeIconSvg(v: Variant, size: number): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="16" fill="${v.bg}"/>
  <ellipse cx="32" cy="32" rx="26" ry="8" stroke="${v.orbit}" stroke-width="2.5" transform="rotate(-18 32 32)"/>
  <circle cx="32" cy="32" r="18" fill="${v.ball}" opacity="${v.ballOpacity}"/>
  <path d="M22,18 Q32,32 22,46" stroke="${v.seamStroke}" stroke-width="1.5" opacity="${v.seamOpacity}"/>
  <path d="M42,18 Q32,32 42,46" stroke="${v.seamStroke}" stroke-width="1.5" opacity="${v.seamOpacity}"/>
  <polygon points="26,22 26,42 42,32" fill="${v.play}"/>
  <circle cx="8" cy="24" r="4.5" fill="${v.dot}"/>
  <circle cx="56" cy="40" r="4.5" fill="${v.dot}"/>
</svg>`;
}

const pngSizes = [32, 64, 128, 256, 512, 1024];

async function main() {
  for (const v of variants) {
    // SVG files
    const svg = makeSvg(v, 512);
    writeFileSync(join(OUT, `logo-${v.name}.svg`), svg);

    const iconSvg = makeIconSvg(v, 512);
    writeFileSync(join(OUT, `icon-${v.name}.svg`), iconSvg);

    // PNG exports
    for (const size of pngSizes) {
      const pngBuf = await sharp(Buffer.from(makeSvg(v, size)))
        .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer();
      writeFileSync(join(OUT, `logo-${v.name}-${size}.png`), pngBuf);
    }

    // App icon PNGs (1024 iOS, 512 Android)
    for (const size of [512, 1024]) {
      const pngBuf = await sharp(Buffer.from(makeIconSvg(v, size)))
        .resize(size, size)
        .png()
        .toBuffer();
      writeFileSync(join(OUT, `icon-${v.name}-${size}.png`), pngBuf);
    }
  }

  console.log("Logo assets exported to public/logos/");
}

main();
