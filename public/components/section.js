export const createSectionComponent = (props) => {
    return `
        <section id="${props.id}">
            <h2>${props.title}</h2>
            <span class="flowering-band"> PortfolioSewingCraftingBooksArtShowsAboutContact </span>
            <div class="grid">
                ${
                    props.cards?.map((card) => (`
                        <div class="card">
                            <div class="image-placeholder"> 
                                <img src="${card?.image}" /> 
                            </div>
                            <strong>${card?.title}</strong>
                            <div class="details">
                                ${
                                    card?.details?.map((d) => d).join(' <br />')
                                }
                            </div>
                        </div>
                    `)).join('')
                }
            </div>
        </section>
    `
}