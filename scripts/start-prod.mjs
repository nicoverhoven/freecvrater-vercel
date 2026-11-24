import fs from 'fs';

process.env.NODE_ENV = 'production';
process.env.FREECVRATER_START_SERVER = '1';

if (fs.existsSync(new URL('../api/index.js', import.meta.url))) {
  await import('../api/index.js');
} else {
  await import('../server.js');
}
