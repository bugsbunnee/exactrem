const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

async function initServer() {
    await app.prepare();

    createServer(async (request, response) => {
        try {
            const parsedUrl = parse(request.url, true);
            const { pathname, query } = parsedUrl;

            if (pathname === '/a') {
                return await app.render(request, response, '/a', query);
            }
            
            if (pathname === '/b') {
                return await app.render(request, response, '/b', query);
            } 

            await handle(request, response, parsedUrl);
        } catch (err) {
            console.error('Error occurred handling', req.url, err);
          
            response.statusCode = 500;
            response.end('internal server error');
        }
    })
    .once('error', (error) => {
        console.log(error);
        process.exit(1);
    })
    .listen(port, (error) => {
        console.log(error);
        
        if (error) throw error;

        console.log(`> Ready on http://${hostname}:${port}`);
    });
}

initServer();