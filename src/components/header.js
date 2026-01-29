import { getConfig } from "./common.js";

export const getHeaderComponent = () => {
    const config = getConfig();
    return `
        <div class="text-light-green">
            <div style="
                    background-image: url('/assets/svg/Scallops.svg');
                    background-repeat: repeat;
                    height: 30px;
                    position: relative;
                ">
            </div>
            <h3 class="text-start mx-4" style="cursor: pointer;"
                onclick="window.location.href = '/'"
            > Mickey Nelson Studios </h3>
        </div>
    `
}