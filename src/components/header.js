export const getHeaderComponent = (color = 'light-green') => {
    return `
        <div class="text-${color}">
            <div style="
                    background-image: url('/assets/svg/Scallops.svg');
                    background-repeat: repeat-x;
                    height: 30px;
                    position: relative;
                    stroke: var(--color-${color});
                ">
            </div>
            <h3 class="text-start mx-4" style="cursor: pointer;"
                onclick="window.location.href = '/'"
            > Mickey Nelson Studios </h3>
        </div>
    `
}