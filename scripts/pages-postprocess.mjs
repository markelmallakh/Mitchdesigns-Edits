// GitHub Pages post-process for the static export in `out/`.
//
// Project Pages are served from /<repo>/, but the app references public files
// with root-absolute paths ("/images/…", "/videos/…"). Next adds the basePath
// to its own assets and links, not to these strings — so prefix them here in
// the built HTML / JS / CSS / RSC payloads. Also adds .nojekyll so Pages
// serves the `_next/` folder.
//
// Usage: node scripts/pages-postprocess.mjs <outDir> </basePath>

import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const [outDir = "out", base = ""] = process.argv.slice(2);
if (!base.startsWith("/")) {
  console.error("basePath must start with '/', e.g. /mitchdesigns-Edits");
  process.exit(1);
}

const TEXT_EXT = new Set([".html", ".js", ".css", ".txt", ".json", ".webmanifest", ".xml"]);
// A quote, backtick, "(", "," or whitespace (or an escaped quote inside
// serialized JSON) directly before a public path — already-prefixed paths
// are preceded by a letter, so they never match twice.
const PUBLIC = /(["'`(,\s]|\\")\/((?:images|videos|fonts|icons)\/|site\.webmanifest|android-chrome-)/g;

let files = 0;
let hits = 0;

async function walk(dir) {
  for (const name of await readdir(dir)) {
    const path = join(dir, name);
    if ((await stat(path)).isDirectory()) {
      await walk(path);
    } else if (TEXT_EXT.has(extname(name))) {
      const src = await readFile(path, "utf8");
      let n = 0;
      const out = src.replace(PUBLIC, (_, pre, rest) => {
        n++;
        return `${pre}${base}/${rest}`;
      });
      if (n) {
        await writeFile(path, out);
        files++;
        hits += n;
      }
    }
  }
}

await walk(outDir);
await writeFile(join(outDir, ".nojekyll"), "");
console.log(`pages-postprocess: prefixed ${hits} public paths in ${files} files with ${base}`);
