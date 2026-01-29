import { getConfig, createWaveDivider } from "../common.js";
import { getFooterComponent } from "../footer.js";
import { getHeaderComponent } from "../header.js";

export const getContactComponent = () => {
   const portfolioBodyHtml = `
           <div class="bg-orange h-100 pt-2 text-center">
                ${ getHeaderComponent() }
               <div id="illustrations" class="text-center py-1">
                   <h1 class="py-4 text-black text-uppercase"> Contact </h1>
                   <p class="text-black mt-4 mb-0"> looking to collaborate or commission something new? </p>
                   <p class="text-black text-underlined"> i’d love to hear from you. </p>
               </div>
           </div>
   
           ${ createWaveDivider('var(--color-orange)', 'var(--color-yellow)') }
           
           <div class="bg-yellow">
               <div class="container">
                   <div class="text-center text-purple py-1">
                       <h1 class="text-uppercase"> Mickeynelson3@gmail.com </h1>
                       <ul style="
                            width: fit-content;
                            margin: auto;
                            font-size: 2rem;
                       ">
                            <li> Book Idea </li>
                            <li> Illustration Commision </li>
                            <li> Birthday PArty </li>
                        </ul>
                   </div>
               </div>
           </div>
   
           ${ getFooterComponent('var(--color-yellow)') }
   
       `;

    return portfolioBodyHtml
}