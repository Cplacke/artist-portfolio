import { getHomeComponent } from "./home.js";
import { getIllustrationsComponent } from './illustrations.js'
import { getBooksComponent } from './books.js'
import { getMainDocuemnt } from "../common.js";
import { getStudioComponent } from "./studio.js";
import { getContactComponent } from "./contact.js";
import { getAboutComponent } from "./about.js";

export const getHomePage = () => {
    const bodyHtml = getHomeComponent();
    return getMainDocuemnt(bodyHtml);
}

export const getIllustrationsPage = () => {
    const bodyHtml = getIllustrationsComponent();
    return getMainDocuemnt(bodyHtml);
}

export const getBooksPage = () => {
    const bodyHtml = getBooksComponent();
    return getMainDocuemnt(bodyHtml);
}

export const getStudioPage = () => {
    const bodyHtml = getStudioComponent();
    return getMainDocuemnt(bodyHtml);
}

export const getAboutPage = () => {
    const bodyHtml = getAboutComponent();
    return getMainDocuemnt(bodyHtml);
}

export const getContactPage = () => {
    const bodyHtml = getContactComponent();
    return getMainDocuemnt(bodyHtml);
}

