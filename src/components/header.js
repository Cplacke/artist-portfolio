import { getConfig } from "./common.js";

export const getHeaderComponent = () => {
    const config = getConfig();
    return `
        <div>
            <div style="
                    background-image: url('/assets/svg/Scallops.svg');
                    background-repeat: repeat;
                    height: 30px;
                    position: relative;
                ">
            </div>
        </div>
    `
}