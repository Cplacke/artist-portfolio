import { createWaveDivider, getConfig } from "./common.js"

export const getFooterComponent = (topColor) => {
    const config = getConfig();
    return `
        ${ createWaveDivider(topColor, '#bfec37') }
        <div class="bg-green" style="margin-top: -5px;">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="d-flex">
                            <div class="align-content-center">
                                <a href="/"> HOME </a>
                                <a href="/illustrations"> PORTFOLIO </a>
                                <a href="/studio"> STUDIO </a>
                            </div>
                            <div>
                                <img style="width: 100%;" src="${config.logo}" alt="${config.name}" />
                            </div>
                            <div class="align-content-center">
                                <a href="/books"> BOOKS </a>
                                <a href="/contact"> CONTACT </a>
                                <a href="/about"> ABOUT </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}