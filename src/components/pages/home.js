import { getConfig } from "../common.js";

export const getHomeComponent = () => {
    const config = getConfig();
    const portfolioBodyHtml = `
        <div class="bg-yellow" style="height: 100vh;">
            <div class="container py-1" >
                <div class="row">
                    <div class="bg-flower-image col-sm-12 col-md-4" style="hieght: 100vh;">
                        <img class="hero"
                            src="${config.logo}"
                            alt="${config.name}" />
                        <nav id="nav" class="text-center">
                            <h3 class="text-pink text-uppercase"> ${config.name} </h3>
                            <a class="text-black text-uppercase"> Artist </a>
                            <a class="text-black text-uppercase"> Maker </a>
                            <a class="text-black text-uppercase"> Storyteller </a>
                        </nav>
                    </div>

                    <div class="col-12 col-md-8">
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
        </div>
    `;

    return portfolioBodyHtml
}