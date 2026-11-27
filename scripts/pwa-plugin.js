import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';

export default function portfolioPwa() {
  let outputDirectory;
  let projectRoot;
  return {
    name: 'portfolio-pwa',
    apply: 'build',
    configResolved(config) {
      projectRoot = config.root;
      outputDirectory = path.resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      for (const required of ['index.html', 'manifest.webmanifest', 'offline.html', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png']) {
        await access(path.join(outputDirectory, required));
      }
      const files = [];
      async function collect(directory, prefix = '') {
        for (const entry of await readdir(directory, { withFileTypes: true })) {
          const relative = prefix + entry.name;
          if (entry.isDirectory()) await collect(path.join(directory, entry.name), relative + '/');
          else if (relative !== 'sw.js' && !relative.endsWith('.map')) files.push(relative);
        }
      }
      await collect(outputDirectory);
      files.sort();
      const hash = createHash('sha256');
      for (const file of files) { hash.update(file); hash.update(await readFile(path.join(outputDirectory, file))); }
      const version = hash.digest('hex').slice(0, 16);
      const template = await readFile(path.join(projectRoot, 'src/service-worker.js'), 'utf8');
      const worker = template.replaceAll('__BUILD_ID__', version).replace('__PRECACHE_URLS__', JSON.stringify(files.map(file => '/' + file)));
      await writeFile(path.join(outputDirectory, 'sw.js'), worker);
      console.log('PWA: precached ' + files.length + ' files · build ' + version);
    },
  };
}
