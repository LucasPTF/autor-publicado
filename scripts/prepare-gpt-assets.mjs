import sharp from "../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js";
import { fileURLToPath } from "node:url";

const sourceDirectory = new URL("../public/assets/gpt/source-png/", import.meta.url);
const storySourceDirectory = new URL("../public/assets/gpt/story-source-png/", import.meta.url);
const outputDirectory = new URL("../public/assets/gpt/final/", import.meta.url);

const assets = [
  ["hero-desktop.png", "hero-desktop.webp", { left: 4, top: 2, width: 1664, height: 936 }],
  ["hero-mobile.png", "hero-mobile.webp", { left: 1, top: 140, width: 1000, height: 1250 }],
  ["expert-authority.png", "expert-authority.webp", { left: 0, top: 0, width: 1024, height: 1280 }],
  ["expert-tension.png", "expert-tension.webp", { left: 0, top: 50, width: 1024, height: 1280 }],
  ["expert-method.png", "expert-method.webp", { left: 4, top: 2, width: 1664, height: 936 }],
  ["expert-final-desktop.png", "expert-final-desktop.webp", { left: 4, top: 2, width: 1664, height: 936 }],
  ["expert-final-mobile.png", "expert-final-mobile.webp", { left: 1, top: 1, width: 1120, height: 1400 }],
];

for (const [source, destination, crop] of assets) {
  const output = fileURLToPath(new URL(destination, outputDirectory));
  await sharp(fileURLToPath(new URL(source, sourceDirectory)))
    .extract(crop)
    .webp({ quality: 88, effort: 6, smartSubsample: true })
    .toFile(output);
  const metadata = await sharp(output).metadata();
  console.log(`${destination}: ${metadata.width}x${metadata.height}`);
}

const storyAssets = [
  "story-01-build",
  "story-02-deploy",
  "story-03-silence",
  "story-04-refactor",
  "story-05-offer",
];

for (const name of storyAssets) {
  const output = fileURLToPath(new URL(`${name}.webp`, outputDirectory));
  await sharp(fileURLToPath(new URL(`${name}.png`, storySourceDirectory)))
    .extract({ left: 4, top: 2, width: 1664, height: 936 })
    .webp({ quality: 88, effort: 6, smartSubsample: true })
    .toFile(output);
  const metadata = await sharp(output).metadata();
  console.log(`${name}.webp: ${metadata.width}x${metadata.height}`);
}

const ogSource = fileURLToPath(new URL("og-image.png", sourceDirectory));
const ogWebp = fileURLToPath(new URL("og-image.webp", outputDirectory));
const ogPng = fileURLToPath(new URL("../../../og.png", outputDirectory));
await sharp(ogSource).resize(1200, 628, { fit: "cover", position: "center" }).webp({ quality: 90, effort: 6 }).toFile(ogWebp);
await sharp(ogSource).resize(1200, 628, { fit: "cover", position: "center" }).png({ compressionLevel: 9 }).toFile(ogPng);
console.log("og-image.webp + public/og.png: 1200x628");
