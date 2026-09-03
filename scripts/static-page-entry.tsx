import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Home from "../app/page";
import ContactPage from "../app/contact/page";

export const homeBody = renderToStaticMarkup(createElement(Home));
export const contactBody = renderToStaticMarkup(createElement(ContactPage));
