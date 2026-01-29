import { createWaveDivider } from "../common.js";
import { getFooterComponent } from "../footer.js";
import { getHeaderComponent } from "../header.js";

export const getStudioComponent = () => {
   const portfolioBodyHtml = `
           <div class="bg-purple h-100 pt-2 text-center">
                ${ getHeaderComponent() }
                <div class="container">
                    <div class="row py-1">
                        <div class="col-12 col-md-6">
                            <h1 class="py-4 text-white text-uppercase"> Studio Work </h1>
                            <p class="text-white mt-4 mb-0"> 
                                Below you’ll find a collection of everything else I do! 
                                From sewing to murals, to 3d animation! Oh my! 
                            </p>
                        </div>
                        <div class="col-12 col-md-6 align-content-center">
                            <p class="text-white mt-4 mb-0"> looking to collaborate or commission something new? </p>
                            <p class="text-white text-underlined"> i’d love to hear from you. </p>
                        </div>
                    </div>
                </div>
           </div>
   
           ${ createWaveDivider('rgb(155, 107, 214)', '#fff') }
           
           <div class="bg-white">
               <div class="container">
                   <div class="text-center">
                       <h3 class="text-black text-uppercase mb-5"> Painting </h3>
                       <div class="gallery">
                            <p> photo gallery </p>
                       </div>
                   </div>
               </div>
               <div class="container">
                   <div class="text-center">
                       <h3 class="text-black text-uppercase mb-5"> Sculpting </h3>
                       <div class="gallery">
                            <p> photo gallery </p>
                       </div>
                   </div>
               </div>
               <div class="container">
                   <div class="text-center">
                       <h3 class="text-black text-uppercase mb-5"> 3D Modeling </h3>
                       <div class="gallery">
                            <p> photo gallery </p>
                       </div>
                   </div>
               </div>
           </div>
   
           ${ getFooterComponent('#fff') }
   
       `;

    return portfolioBodyHtml
}