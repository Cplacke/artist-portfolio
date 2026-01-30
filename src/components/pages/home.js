import { getConfig } from "../common.js";

export const getHomeComponent = () => {
    const config = getConfig();
    const portfolioBodyHtml = `
        <div class="bg-yellow" style="min-height: 100vh;">
            <div style=" background-image: url('/assets/svg/Squiggle.svg'); 
                backgound-position-x: 50%; background-repeat: repeat-x; 
                height: 30px;"
            ></div>
            <div class="container h-100">
                <div class="row">
                    <div class="col-sm-12 col-md-4 position-relative" style="z-index: 1;">
                        <img id="flower-bg" class="svg-top-left position-absolute" style="z-index: -5;"
                            src="/assets/svg/Flower.svg" />
                        <img id="logo" class="hero"
                            src="${config.logo}"
                            alt="${config.name}" />
                        <nav id="nav" class="text-center">
                            <h3 class="text-pink text-uppercase"> ${config.name} </h3>
                            <a class="text-black text-uppercase"> Artist </a>
                            <a class="text-black text-uppercase"> Maker </a>
                            <a class="text-black text-uppercase"> Storyteller </a>
                        </nav>
                    </div>

                    <div class="col-12 col-md-8" style="z-index: 2;">
                        <div class="h-100 text-center">
                            <h3 class="py-4 text-pink text-uppercase"> Mickey Nelson Studios </h3>
                            <div class="d-flex flex-wrap colorful">
                                <div class="box-menu my-2 align-content-center mx-auto w-30 opacity-0">  </div>
                                <div class="box-menu my-2 align-content-center mx-auto w-30 bg-pink"
                                    onclick="window.location.href = '/illustrations'"> 
                                    <img class="svg-top-right" src="/assets/svg/Sparkles.svg" />
                                    Illustration Portfolio 
                                    
                                </div>
                                <div class="box-menu my-2 align-content-center mx-auto w-30 bg-blue"
                                    onclick="window.location.href = '/books'" > 
                                    Books 
                                </div>
                                <div class="box-menu my-2 align-content-center mx-auto w-30 bg-purple"
                                    onclick="window.location.href = '/studio'" >
                                    <img class="svg-bottom-left" src="/assets/svg/Stars.svg" />
                                    Studio Work
                                </div>
                                <div class="box-menu my-2 align-content-center mx-auto w-30 bg-green"
                                    onclick="window.location.href = '/contact'" > Contact </div>
                                <div class="box-menu my-2 align-content-center mx-auto w-30 bg-orange"
                                    onclick="window.location.href = '/about'" > About </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3"
                style=" background-image: url('/assets/svg/Squiggle.svg'); 
                backgound-position-x: 50%; background-repeat: repeat-x; 
                height: 30px;"
            ></div>
        </div>
    `;

    return portfolioBodyHtml
}