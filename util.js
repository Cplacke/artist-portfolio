import { contentType } from "https://deno.land/std/media_types/mod.ts";

export const getHeaders = (url) => {
    const headers = new Headers();
    headers.set("Content-Type", getContentType(url.pathname) || "text/plain");
    return headers;
}

export const getContentType = (path) => {
    const ext = /.*?(\..+$)/.exec(path)?.at(1);
    return contentType(ext);
}