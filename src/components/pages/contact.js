import { svgStars } from "../../../assets/svg/index.js";
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
                   <div class="text-center py-1 position-relative">
                        ${ svgStars('', 'class="position-absolute hover-tilt" style="width: 130px; top: -200px; left: 0;"') }
                       <h1 class="text-uppercase text-purple"> Mickeynelson3@gmail.com </h1>
                       <div class="row mt-4"> 
                            <div class="col-12 col-lg-5 text-purple"> 
                                <ul class="mb-4" style="width: fit-content; margin: auto; font-size: 2rem;">
                                    <li> Book Idea </li>
                                    <li> Illustration Commision </li>
                                    <li> Birthday PArty </li>
                                </ul>
                            </div>
                            <div class="col-12 col-lg-7"> 
                                <div class="corkboard"> 
                                    <p class="bg-blue"> note 0 </p>
                                    <p class="bg-blue"> note  #22 you did a wonderful job on your latest relase of characters! love them all <3 </p>
                                    <p class="bg-blue"> note  #68</p>
                                    <p class="bg-blue"> note #4 verry long note about something that I want to contact yo uabout and we can do something that alot of people would really love! </p>
                                </div>
                            </div>
                       </div>
                       
                   </div>
               </div>
           </div>
   
           ${ getFooterComponent('var(--color-yellow)') }
   
       `;

    return portfolioBodyHtml
}