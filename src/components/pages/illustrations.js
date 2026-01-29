import { getConfig, createWaveDivider } from "../common.js";
import { getFooterComponent } from "../footer.js";

export const getIllustrationsComponent = () => {
    const portfolioBodyHtml = `
        <div class="bg-pink h-100 text-center">
            <div id="illustrations" class="text-center py-1">
                <h1 class="text-white py-4 text-uppercase"> illustration Portfolio </h1>
                <p class="text-white mb-0 mt-3"> Welcome to the illustration portion of Mickey Nelson Studios! </p>
                <p class="text-white mb-0"> Below you’ll find a curated look at my illustration work—ranging picture books, to graphic design, to personal paintings.  </p>
                <p class="text-white mb-0"> I’ve always been drawn to works that are whimsical, colorful, and full of magic! </p>

                <p class="text-white mt-4 mb-0"> looking to collaborate or commission something new? </p>
                <p class="text-white text-underlined"> i’d love to hear from you. </p>
            </div>
        </div>

        ${ createWaveDivider('rgb(232, 106, 174)', '#fff') }
        
        <div class="bg-white">
            <div class="container">
                <div class="text-center">
                    <h3 class="text-uppercase mb-5"> illustrations </h3>
                    <div class="gallery">
                        ${
                            [
                                '/assets/images/image0.png',
                                '/assets/images/image1.jpeg',
                                '/assets/images/image2.png',
                                '/assets/images/image3.jpeg',
                                '/assets/images/image4.jpeg',
                                '/assets/images/image5.png',
                                '/assets/images/image6.jpeg',
                                '/assets/images/image7.jpeg',
                                '/assets/images/image8.jpeg',
                                '/assets/images/image9.jpeg',
                                '/assets/images/image10.jpeg',
                                '/assets/images/image11.jpeg',
                                '/assets/images/image12.jpeg',
                                '/assets/images/image13.jpeg',
                                '/assets/images/image14.jpeg',
                            ].map((img) => (`
                                <img src="${img}"/>
                            `)).join(' ')
                        }
                    </div>
                </div>
            </div>
        </div>

        ${ getFooterComponent('#fff') }

    `;

    return portfolioBodyHtml
}