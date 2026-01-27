import { getPortfolioDocument, getGalleryDocuemnt } from './src/generate.js'
import { serve } from "https://deno.land/std@0.116.0/http/server.ts";
import { getHeaders } from './util.js'



serve((req) => {
    const assetsCheck = /\/assets\/(.*)/i.exec(req.url)

    if (assetsCheck) {
        console.info(`serving asset path `, assetsCheck[0]);
        const file = Deno.openSync(`.${assetsCheck[0]}`, { read: true });
        return new Response(file.readable, {
            status: 200,
            headers: getHeaders(new URL(req.url))
        });
    }

    const galleryCheck = /\/gallery\/(.*)/i.exec(req.url)
    if (galleryCheck !== null) {
        console.info(`serving gallery path `, galleryCheck[0]);
        const htmlGallery = getGalleryDocuemnt(galleryCheck[1]);
         return new Response(htmlGallery, {
            status: 200,
            headers: { 'Content-Type': 'text/html' }
        })
    }

    console.info(`serving HOMEPAGE `);
    const htmlHomepage  = getPortfolioDocument();
    return new Response(htmlHomepage, {
        status: 200,
        headers: { 'Content-Type': 'text/html' }
    })
}, { addr: ':3000' });