
export const getConfig = () => {
    return {
        name: 'Mikaela Nelson',
        logo: 'https://media.canva.com/v2/image-resize/format:PNG/height:621/quality:100/uri:ifs%3A%2F%2FM%2Fb21bbbe4-9a01-4e35-a0bf-b83f188015ed/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAOs2MBEGMiZXhgbvwTAlZSTKRC6Va9r9HB3if0-SDolI&exp=1769559897&osig=AAAAAAAAAAAAAAAAAAAAAJRQQltv1iFvqpwGH327uSKg44PYSNK8hawmA842QYUe&signer=media-rpc&x-canva-quality=screen',
        gallery: [
            "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/d4e9f25e-3c55-4f10-8c18-71bb068d99b6_car_202x158.png?h=a7e60f9fb1a028dd2239639fdfcb2ad5",
            "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/5aae0cc9-b4f2-43b4-9403-2cb346602872_car_202x158.jpeg?h=3271c5bd83ca54c347b85edc68f79697",
            "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/750ebfa5-beda-4edb-8be2-8f2d95e8e2c0_rwc_301x138x2765x2161x2765.jpeg?h=5273c32c3a20a062e4e72dc267bdf8a6",
            "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/8b4e7631-ab27-4b67-b725-070a51e1f1e4_rwc_0x109x1000x781x1000.jpg?h=f8bd02bc032a0b29af743c63430d68ed",
            "https://m.media-amazon.com/images/I/61tX1HuWXiL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
            "https://m.media-amazon.com/images/I/6193D721XNL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
            "https://m.media-amazon.com/images/I/61d0idUjO1L._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
            "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/dd6c4c0a-90ad-46a1-b8c7-3d3ed9cd7c8a_rwc_1019x0x2491x1948x2491.jpg?h=c0cd12c8ed80e2db120f583eac0b5e35",
            "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/d1e30325-47b7-4bfa-887a-6e749ef93546_rwc_0x0x630x492x630.png?h=eadea06b480ff4e1c8ef074585139e31",
            "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/1c0b50ff-1246-491d-b028-8451a346f420_rw_3840.jpeg?h=e9e81a1fcd26f37fe1736fff2a131edf",
            "https://cdn.myportfolio.com/d37fdbe1-7ddc-44b1-9bfa-6499a568ea5c/d000773d-3c7e-4bb4-ac91-cf55dceeb652_rw_1200.jpg?h=5e617b0239a3e108a55906518e786527",
        ]
    }
}

export const getMainDocuemnt = (bodyHtml) => {
    const config = getConfig();
    return `
        <!DOCTYPE html>
        <html lang="en">

            <head>
                <meta charset="UTF-8" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"/>
                <link rel="stylesheet" href="./assets/main.css" />
                <link rel="stylesheet" href="./assets/section.css" />
                <title>${ config.name }</title>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>

            <body>
                ${ bodyHtml }
            </body>
        </html>
    `
}


export const createWaveDivider = (topColor, bottomColor) => {
    return `
        <div>
            <svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d=" M 0 100 C 200 20, 300 20, 400 100 C 500 160, 600 160, 700 100 C 800 40, 900 40, 1000 100 L 1000 0 L 0 0 Z "
                    fill="${topColor}" style="filter: drop-shadow(1px -1px 6px black)" />

                <path d=" M 0 100 C 200 20, 300 20, 400 100 C 500 160, 600 160, 700 100 C 800 40, 900 40, 1000 100 L 1000 200 L 0 200 Z "
                    fill="${bottomColor}" />
                </svg>
        </div>
    `
}