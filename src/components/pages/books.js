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
                        <img class="position-absolute hover-tilt"
                            style="width: 130px; top: -200px; right: 0;"
                            src="/assets/svg/Stars.svg"
                        />
                       <h3 class="text-black text-uppercase"> Written and Illustrated by Mikaelea Nelson </h3>
                       <div class="box-menu hover-tilt bg-pink rounded-pill mx-auto mt-4 mb-2" onclick="window.open('https://www.amazon.com/stores/author/B0BSMDGZTJ/allbooks?_encoding=UTF8&ref_=aufs_ap_ahdr_dsk_ab&pd_rd_w=dnNPh&content-id=amzn1.sym.7e190e19-9f6f-4df8-807a-5a7608594741&pf_rd_p=7e190e19-9f6f-4df8-807a-5a7608594741&pf_rd_r=143-7809362-4300437&pd_rd_wg=AQR7i&pd_rd_r=6cf15635-8c46-4960-8098-f3db49cf8435&ccs_id=864ccd21-e073-43ea-836d-c079f3aa0be4')">
                            Shop Books
                       </div>
                       <p class="text-black mb-5"> Order your copy of any of my titles on Amazon! </p>
                       <div class="gallery">
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