import { svgSparkles } from "../../../assets/svg/index.js";
import { getConfig, createWaveDivider } from "../common.js";
import { getFooterComponent } from "../footer.js";
import { getHeaderComponent } from "../header.js";

export const getAboutComponent = () => {
    const config = getConfig();
   const portfolioBodyHtml = `
           <div class="bg-light-green h-100 pt-2 text-center">
                ${ getHeaderComponent('purple') }
               <div id="illustrations" class="text-center py-1">
                   <h1 class="py-4 text-purple text-uppercase"> About Me </h1>
               </div>
           </div>
   
           ${ createWaveDivider('var(--color-light-green)', 'var(--color-yellow)') }
           
           <div class="bg-yellow">
               
               <div class="container w-75">
                   <div class="row">
                        <div class="col-12 col-md-7 text-pink position-relative">
                            ${ svgSparkles('var(--color-purple)', 'class="position-absolute hover-tilt" style="width: 130px; top: -150px;"') }
                            <h4 class="text-center"> Hello! <h4>
                            <h4> I have always been a creative person. In my spare time I love to craft, paint, and tinker with new ideas. I fell in love with the idea of using my abilities to make others smile.  <h4>
                            <h4> Currently, I am a resident in the field of prosthetics and orthotics in North Carolina. The children that I work with have inspired me to pursue a long time dream of becoming a children's book Author/Illustrator.  <h4>
                            <h4> I love having this creative outlet that is so much fun yet still challenges me. I hope my work inspires others and spreads joy. <h4>
                            <h4 class="text-end me-5"> ~ Mikaela <h4>
                        </div>
                        <div class="col-12 col-md-5">
                            <img src="${config.photo}"
                                class="w-100"
                                style="border-radius: 8px;"
                            />
                        </div>
                    </div>
               </div>
           </div>
   
           ${ getFooterComponent('var(--color-yellow)') }
   
       `;

    return portfolioBodyHtml
}