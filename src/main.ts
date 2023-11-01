import {tag, html} from "./package";

const {div, input, button} = tag;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = div(
  {class: "flex flex-col space-y-4 bg-red-200"},
  div(
    {},
    input({type: "search", placeholder: "Search...", name: "key"}),
    button({}, html`${`<img onerror='alert("Blaise")' src="1" />`}`),
    input({type: "search", placeholder: "Search...", name: "key"}),
    input({type: "search", placeholder: "Search...", name: "key"}),
    input({type: "search", placeholder: "Search...", name: "key"}),
    input({type: "search", placeholder: "Search...", name: "key"})
  )
);
