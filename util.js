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









const saveFilesToImageDir = async (dirName, urls) => {

    const filePath = `./assets/images/studio/${dirName}`;
    await Deno.mkdir(filePath, { recursive: true });

    urls.forEach(async (src) => {
        const res = await fetch(src);
        const nameRegex = /\/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c\/(.+)\?h/.exec(src)

        if (nameRegex[1]) {
            const fileName = `${filePath}/${nameRegex[1]}`
            const fileData = await res.bytes()
            Deno.writeFileSync(fileName, fileData)
        }
    })
}

// const paintings = [
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/e8b1bdec-495b-4571-9c8b-bf61a2858f50_rw_3840.jpeg?h=f39c4ae2ed38b43badae976ea6b104f1",
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/1192fafb-4e25-4dd8-936b-aea924e256d0_rw_3840.jpeg?h=779e3099df31ffc7f10b2539ea25e31a",
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/cd168903-d610-449b-b636-23468f68ce27_rw_3840.jpeg?h=124e76ab1e1f7c4f620fdd700fd32a31",
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/4f6ea4da-5cf7-462f-959c-55d3f65da71a_rw_3840.jpeg?h=3a9f40c722faf6df2eb9c4328153fa73"
// ]
// const muarls = [
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/ea840ee6-4984-415b-a746-bafcae5dbda3_rw_1920.jpeg?h=07f6dae74960ca3a4f328ea1efabb6e1",
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/516dedd0-23be-4cba-8908-00ecd20e5a86_rw_3840.jpeg?h=f799382c94310b9e379984d0194c06d6",
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/9925a0bd-b935-4e41-926a-36dab93c7fc1_rw_3840.jpeg?h=4420d93a4b39eb956644b620f1d02253"
// ]
// const stickers = [
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/97490aa1-b816-4982-a961-e4aa03a36437_rw_1920.PNG?h=88da24f673a1c36fdb6fa51b9f4a6edb",
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/f2b0a233-1de3-4258-88b0-6ae407773ce6_rw_1200.png?h=dfbb5ef3aac49d7b5c2bb6e32bbfae74",
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/a5580fdf-d192-4caa-acfb-ba96e1f18ff6_rw_1920.jpeg?h=efbee94db406bbe302d72b28166232df",
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/b7e383b4-e5a2-44f6-a692-517a33db29df_rw_1200.png?h=b06202c5de052cba2d7e2cfa5e193d97",
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/6e8503df-cc1e-491c-b733-3295b2b15569_rw_1200.jpg?h=e820b7382345cc0542cea8aef7bda2de",
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/837d4a7f-055f-437c-9e5c-bced9f2b6582_rw_3840.jpeg?h=bbf00f0643c5aa367ebf7edb77851839"
// ]
// const modeling = [
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/14691640-ff20-4919-8b08-209e8f3bd4da_rw_1200.jpeg?h=7095f73fcea7ea3c83b468bbd38afb84",
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/28df267f-906b-4f2d-9788-861a9f120997_rw_1200.jpg?h=96fd13e67b4c7a7a8927204e98abda3c",
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/1ffd5f7b-ca94-400a-9e0c-523f757f13f2_rw_1200.jpg?h=c946431d4c5584a467ad643e3ed312d4",
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/e1956330-98c1-4b09-aab0-681d8f51c3d0_rw_1200.jpg?h=9d1d65847cd2772f6c38fcc5669b1c0e",
//     "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/03ae5552-c287-4b85-96a6-cb9b452d4441_rw_1200.jpg?h=0c721fa5018decb14748e5b3af6ba9b9"
// ]

// saveFilesToImageDir('murals', muarls)
// saveFilesToImageDir('paintings', paintings)
// saveFilesToImageDir('stickers', stickers)
// saveFilesToImageDir('modeling', modeling)