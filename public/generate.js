import { parse } from 'npm:yaml';
import { createSectionComponent } from './components/section.js';

export const getConfig = () => {
    const file = Deno.readFileSync('./public/portfolio.yml', 'utf8');
    const config = parse(new TextDecoder("utf-8").decode(file));
    return config
}

export const getPortfolioDocument = () => {
    const config = getConfig();

    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" href="./assets/main.css" />
            <link rel="stylesheet" href="./assets/section.css" />
            <title>${ config.name }</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>

        <body>

            <header>
                <img class="hero"
                    src="${config.logo}"
                    alt="${config.name}">
                <nav id="nav">
                    <!-- <a href='#section'> section </a>  -->
                     ${
                        config.sections.map((section) => (
                            `<a href='#${section.id}'> ${section.title} </a>`
                        )).join('\n')
                    }
                </nav>
            </header>

            ${
                config.sections.map((section) => {
                    if (section.cards) {
                        return createSectionComponent(section)
                    }
                    if (section.large) {
                        return `
                            <section id="${section.id}">
                                <h2>${section.title}</h2>
                                <span class="flowering-band"> PortfolioSewingCraftingBooksArtShowsAboutContact </span>
                                <div class="card grid" style="width: 75%; grid-template-columns: 1fr 2fr">
                                    <div class="image-placeholder"> 
                                        <img src="${section.large?.image}" /> 
                                    </div>
                                    <div>
                                        <strong>${section.large?.title}</strong>
                                        <div class="details">
                                            ${
                                                section.large?.details?.map((d) => `<div style="padding: 0.2rem 0">${d}</div>`).join('')
                                            }
                                        </div>
                                    </div>
                                </div>
                            </section>
                        `
                    }
                }).join('')
            }

            <footer>
                © 2026 ${config.name} • Local Artist Portfolio
            </footer>

        </body>

        </html>
    `
}
