import {HtmlEscapedString, button, div, escHtml, input} from "./package";

const value = `""/> <img src='' onerror='alert(1)'/>`;
document.querySelector<HTMLDivElement>("#app")!.innerHTML = div(
  {class: "flex flex-col space-y-4 bg-red-200"},
  div(
    {},
    input({
      type: "search",
      placeholder: "Search...",
      name: "key",
      value: value,
      "@click": `value`,
      "x-data": "{Blaise: true}",
    }),
    input({type: "search", placeholder: "Search... bsadasd", name: "key"}),
    input({type: "search", placeholder: "Search...", name: "key"}),
    input({type: "search", placeholder: "Search...", name: "key"}),
    input({type: "search", placeholder: "Search...", name: "key"})
  )
);
