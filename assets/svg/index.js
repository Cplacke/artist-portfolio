
const Flower = Deno.readTextFileSync('./assets/svg/Flower.svg')
const Petals = Deno.readTextFileSync('./assets/svg/Petals.svg')
const Scallops = Deno.readTextFileSync('./assets/svg/Scallops.svg')
const Sparkles = Deno.readTextFileSync('./assets/svg/Sparkles.svg')
const Squiggle = Deno.readTextFileSync('./assets/svg/Squiggle.svg')
const Stars = Deno.readTextFileSync('./assets/svg/Stars.svg')

const replaceStroke = (color, svg) => (color ? svg.replace(/stroke:(.[^;]+);/g, `stroke: ${color};`) : svg )
const replaceFill = (color, svg) => (color ? svg.replace(/fill:(.[^;]+);/g, `fill: ${color};`) : svg )

const addClassString = (classValue, svg) => (`<div ${classValue}>${svg}</div>`)

export const svgFlower = (color, classValue = '') => ( addClassString(classValue, replaceStroke(color, Flower)) )
export const svgPetals = (color, classValue = '') => ( addClassString(classValue, replaceFill(color, Petals)) )
export const svgScallops = (color, classValue = '') => ( addClassString(classValue, replaceStroke(color, Scallops)) )
export const svgSparkles = (color, classValue = '') => ( addClassString(classValue, replaceFill(color, Sparkles)) )
export const svgSquiggle = (color, classValue = '') => ( addClassString(classValue, replaceStroke(color, Squiggle)) )
export const svgStars = (color, classValue = '') => ( addClassString(classValue, replaceFill(color, Stars)) )


