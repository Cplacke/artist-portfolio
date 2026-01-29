// import { getHomeComponent, getGalleryDocuemnt } from './src/generate.js'
import { serve } from "https://deno.land/std@0.116.0/http/server.ts";
import { getHeaders } from './util.js'
import { getHomePage, getIllustrationsPage, getBooksPage, getStudioPage } from "./src/components/pages/index.js";
import { getMainDocuemnt } from "./src/components/common.js";



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

    const illustrationCheck = /\/illust/i.test(req.url)
    if (illustrationCheck) {
        console.info(`serving illustrations path `);
        const htmlIllustrations = getIllustrationsPage();
         return new Response(htmlIllustrations, {
            status: 200,
            headers: { 'Content-Type': 'text/html' }
        })
    }

    const bookCheck = /\/books/i.test(req.url)
    if (bookCheck) {
        console.info(`serving books path `);
        const htmlBooks = getBooksPage();
         return new Response(htmlBooks, {
            status: 200,
            headers: { 'Content-Type': 'text/html' }
        })
    }

    const studioCheck = /\/studio/i.test(req.url)
    if (studioCheck) {
        console.info(`serving studio path `);
        const htmlStudio = getStudioPage();
         return new Response(htmlStudio, {
            status: 200,
            headers: { 'Content-Type': 'text/html' }
        })
    }

    const aboutCheck = /\/about/i.test(req.url)
    if (aboutCheck) {
        console.info(`serving about path `);
        const htmlAbout = getBooksPage();
         return new Response(htmlAbout, {
            status: 200,
            headers: { 'Content-Type': 'text/html' }
        })
    }

    console.info(`serving HOMEPAGE `);
    const htmlHomepage  = getHomePage();
    return new Response(htmlHomepage, {
        status: 200,
        headers: { 'Content-Type': 'text/html' }
    })
}, { addr: ':3000' });