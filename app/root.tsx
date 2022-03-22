import {
  Links,
  LinksFunction,
  Meta,
  Scripts,
} from "remix";
import type { MetaFunction } from "remix";

import primeflex from "primeflex/primeflex.css";
import theme from "primereact/resources/themes/lara-light-indigo/theme.css";
import primereact from "primereact/resources/primereact.min.css";
import primeicons from "primeicons/primeicons.css";
import NavBar from "./components/NavBar";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};


export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: primeflex },
    { rel: "stylesheet", href: theme },
    { rel: "stylesheet", href: primereact },
    { rel: "stylesheet", href: primeicons },
  ];
};


const mainStyle = {
  fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  fontSize: "16px"
}

export default function App() {
  return (
    <html lang="en" style={mainStyle}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NavBar/>
        <Scripts />
      </body>
    </html>
  );
}
