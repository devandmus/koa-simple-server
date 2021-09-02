// Modules
const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');

// Expected here; serve static files from public dir
const staticDirPath = path.join(__dirname, 'src');

// Init Koa.js server
const server = new Koa();

// Mount the middleware
server.use(serve(staticDirPath));

// Run Koa.js server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server Listening on PORT ${PORT} 🚀 ..`));