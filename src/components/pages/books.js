import { getConfig, createWaveDivider } from "../common.js";
import { getFooterComponent } from "../footer.js";
import { getHeaderComponent } from "../header.js";

export const getBooksComponent = () => {
   const portfolioBodyHtml = `
           <div class="bg-blue h-100 pt-2 text-center">
                ${ getHeaderComponent() }
               <div id="illustrations" class="text-center py-1">
                   <h1 class="py-4 text-black text-uppercase"> books </h1>
                   <p class="text-black mt-4 mb-0"> looking to collaborate or commission something new? </p>
                   <p class="text-black text-underlined"> i’d love to hear from you. </p>
               </div>
           </div>
   
           ${ createWaveDivider('var(--color-blue)', '#fff') }
           
           <div class="bg-white">
               <div class="container">
                   <div class="text-center position-relative">
                        <img class="position-absolute"
                            style="width: 130px; top: -200px; right: 0;"
                            src="/assets/svg/Stars.svg"
                        />
                       <h3 class="text-black text-uppercase mb-5"> Written and Illustrated by Mikaelea Nelson </h3>
                       <div class="gallery" style="column-count: 2">
                           ${
                               [
                                    "https://m.media-amazon.com/images/I/61tX1HuWXiL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
                                    "https://m.media-amazon.com/images/I/6193D721XNL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
                                    "https://m.media-amazon.com/images/I/61d0idUjO1L._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
                               ].map((img) => (`
                                   <img src="${img}" style="max-width: 300px;" class="mx-auto"/>
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