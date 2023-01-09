import type { LinksFunction } from "@remix-run/react/dist/routeModules";
import type * as T from "./button.type";

import buttonStyle from "./style/button.css";

const buttonLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: buttonStyle,
  },
];
// we grab the css and make it available in the browser

const Button = ({ children, kind = "primary" }: T.Button) => {
  return <button data-kind={kind}>{children}</button>;
};

export { Button, buttonLink };
