process.env.NODE_ENV = 'production';
process.env.FREECVRATER_START_SERVER = '1';

await import('../server.js');
