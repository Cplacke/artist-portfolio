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









const saveFilesToImageDir = async (url, fileName) => {

    // const filePath = `./assets/images/${dirName}`;
    // await Deno.mkdir(filePath, { recursive: true });
    // const filePath = `./assets/images/${dirName}`;
    // await Deno.mkdir(filePath, { recursive: true });

        const res = await fetch(url);

        if (fileName[1]) {
            const filePath = `./assets/images/${fileName}`
            const fileData = await res.bytes()
            Deno.writeFileSync(filePath, fileData)
        }
}

// saveFilesToImageDir(
//     'https://media.canva.com/v2/image-resize/format:JPG/height:800/quality:92/uri:ifs%3A%2F%2FM%2F7a31c6d7-64ad-4637-8278-9215e7525afc/watermark:F/width:600?csig=AAAAAAAAAAAAAAAAAAAAALhr7JYS4VYb7u_5PlsxxnDijTSf52SnyEGzCaF4gcpY&exp=1769903044&osig=AAAAAAAAAAAAAAAAAAAAAIXkvmzCnZtAUROFxU4VWTV0RlrjBkx-EDG8-4io-oHh&signer=media-rpc&x-canva-quality=screen',
//     'photo.jpg'
// );
saveFilesToImageDir(
    'https://media.canva.com/v2/image-resize/format:PNG/height:621/quality:100/uri:ifs%3A%2F%2FM%2Fb21bbbe4-9a01-4e35-a0bf-b83f188015ed/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAEtarnDcxQyTVUZbmmyA1kaj8GsGOYWXJ7nvRBV5Nz8N&exp=1769901897&osig=AAAAAAAAAAAAAAAAAAAAAItXoI9AkRI-7GtuTOCBJeGQgECHmY9NXI7Vv3ftn6OZ&signer=media-rpc&x-canva-quality=screen',
    'logo.png'
);
