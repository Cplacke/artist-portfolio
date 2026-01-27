import { parse } from 'npm:yaml';
import { createSectionComponent } from './components/section.js';

export const getConfig = () => {
    const file = Deno.readFileSync('./src/portfolio.yml', 'utf8');
    const config = parse(new TextDecoder("utf-8").decode(file));
    return config
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
                <div class="container mb-5">
                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            <img class="hero"
                                src="${config.logo}"
                                alt="${config.name}">
                            <nav id="nav" class="text-center">
                                <!-- <a href='#section'> section </a>  -->
                                <h3 class="text-pink text-uppercase"> ${config.name} </h3>
                                <a class="text-pink text-uppercase"> Artist </a>
                                <a class="text-pink text-uppercase"> Maker </a>
                                <a class="text-pink text-uppercase"> Storyteller </a>
                            </nav>
                        </div>
                        <div class="col-12 col-md-8">
                            ${ bodyHtml }
                        </div>
                    </div>
                </div>

                
                <footer>
                    © 2026 ${config.name} • Local Artist Portfolio
                </footer>
            </body>
        </html>
    `
}

export const getPortfolioDocument = () => {
    const config = getConfig();

    // const portfolioBodyHtml = config.sections.map((section) => {
    //     if (section.cards) {
    //         return createSectionComponent(section)
    //     }
    //     if (section.large) {
    //         return `
    //             <section id="${section.id}">
    //                 <h2>${section.title}</h2>
    //                 <span class="flowering-band"> PortfolioSewingCraftingBooksArtShowsAboutContact </span>
    //                 <div class="card grid" style="width: 75%; grid-template-columns: 1fr 2fr">
    //                     <div class="image-placeholder"> 
    //                         <img src="${section.large?.image}" /> 
    //                     </div>
    //                     <div>
    //                         <strong>${section.large?.title}</strong>
    //                         <div class="details">
    //                             ${
    //                                 section.large?.details?.map((d) => `<div style="padding: 0.2rem 0">${d}</div>`).join('')
    //                             }
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //         `
    //     }
    // }).join('')

    const portfolioBodyHtml = `
        <div class="h-100 text-center">
            <h3 class="py-4 text-uppercase"> Mickey Nelson Studios </h3>
            <div class="d-flex flex-wrap colorful">
                <div class="box-menu my-2 align-content-center mx-auto w-30 opacity-0">  </div>
                <div class="box-menu my-2 align-content-center mx-auto w-30 bg-pink"> Portfolio </div>
                <div class="box-menu my-2 align-content-center mx-auto w-30 bg-blue"> Books </div>
                <div class="box-menu my-2 align-content-center mx-auto w-30 bg-purple"> About </div>
                <div class="box-menu my-2 align-content-center mx-auto w-30 bg-green"> Contact </div>
                <div class="box-menu my-2 align-content-center mx-auto w-30 bg-orange"> Shop </div>
            </div>
        </div>
    `;

    return getMainDocuemnt(portfolioBodyHtml)
}

export const getGalleryDocuemnt = (galleryTitle) => {
    const config = getConfig();

    const galleryConfig = config.gallery.find((gallery) => (
        gallery.title.toLocaleLowerCase() === galleryTitle.toLocaleLowerCase()
    ));
    console.info(galleryConfig, galleryTitle);

    const galleryBodyHtml = `
        <section>
            <h2>${galleryConfig.title}</h2>
            <span class="flowering-band"> PortfolioSewingCraftingBooksArtShowsAboutContact </span>
            <div class="card" >
                <div class="image-placeholder"> 
                    <img src="${galleryConfig.thumbnail}" /> 
                </div>
                <div>
                    <strong>${galleryConfig.title}</strong>
                    <div class="details">
                    </div>
                </div>
            </div>
        </section>
    `
    return getMainDocuemnt(galleryBodyHtml)
}