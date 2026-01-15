import { getPortfolioDocument } from './public/generate.js'
import { serve } from "https://deno.land/std@0.116.0/http/server.ts";
import { contentType } from "https://deno.land/std/media_types/mod.ts";


const docuemnt  = getPortfolioDocument();

export const getHeaders = (url) => {
    const headers = new Headers();
    headers.set("Content-Type", getContentType(url.pathname) || "text/plain");
    return headers;
}

export const getContentType = (path) => {
    const ext = /.*?(\..+$)/.exec(path)?.at(1);
    return contentType(ext);
}

serve((req) => {
    if (/\/assets/i.test(req.url)) {
        const path = './assets'+req.url
            .substring(req.url.indexOf('/assets') + 7)
        console.info(`serving asset path `, req.url);
        const file = Deno.openSync(path, { read: true });
        return new Response(file.readable, {
            status: 200,
            headers: getHeaders(new URL(req.url))
        });
    }

    return new Response(docuemnt, {
        status: 200,
        headers: { 'Content-Type': 'text/html' }
    })
}, { addr: ':3000' });