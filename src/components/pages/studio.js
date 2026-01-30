import { createWaveDivider } from "../common.js";
import { getFooterComponent } from "../footer.js";
import { getHeaderComponent } from "../header.js";

export const getStudioComponent = () => {

    const sets = {};
    for (const dir of Deno.readDirSync("./assets/images/studio")) {
        if (dir.isDirectory) {
            sets[dir.name] = []
            for (const file of Deno.readDirSync(`./assets/images/studio/${dir.name}`)) {
                sets[dir.name].push(`/assets/images/studio/${dir.name}/${file.name}`)
            }
        }   
    }

    const portfolioBodyHtml = `
           <div class="bg-purple h-100 pt-2 text-center">
                ${ getHeaderComponent() }
                <div class="container">
                    <div class="py-1 position-relative">
                        <img class="position-absolute"
                            style="width: 130px; top: -150px; right: 0;"
                            src="/assets/svg/Flower.svg"
                        />
                        <h1 class="py-4 text-white text-uppercase"> Studio Work </h1>
                        <p class="text-white mt-4 mb-0"> 
                            Below you’ll find a collection of everything else I do! 
                            From sewing to murals, to 3d animation! Oh my! 
                        </p>
                    </div>
                </div>
           </div>
   
           ${ createWaveDivider('rgb(155, 107, 214)', '#fff') }

           <div class="bg-white">
               <div class="container">
                ${
                    Object.keys(sets).map((set) => (`
                        <div class="text-center my-4">
                            <h3 class="text-black text-uppercase mb-2"> ${set} </h3>
                            <div class="gallery">
                                ${ sets[set].map((img) => (`<img src="${img}" />`)).join(' ') }
                            </div>
                        </div>
                    `)).join('')
                }
                </div>
           </div>
   
           ${ getFooterComponent('#fff') }
   
       `;

    return portfolioBodyHtml
}