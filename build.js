const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['js/fluid-pressure-and-flow-main.js'],
  bundle: true,
  outfile: 'dist/fluid-pressure-and-flow.js',
  format: 'iife',
  platform: 'browser',
  target: ['chrome60', 'firefox60', 'safari11'],
  loader: { '.png': 'dataurl', '.jpg': 'dataurl' },
  sourcemap: true,
}).catch(() => process.exit(1)); 