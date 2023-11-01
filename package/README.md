# structr-composer

Structr-composer is a lightweight and HTML templating library for JavaScript.

Use the functions like html tags

`tag(attributes: {[x:string]: string}, ...children: HtmlEscapedString[])`

The first parameters will be attributes for the tag and the children, will be it's child.

`` div({name:'label'}, button({class:'bg-red-200'}, html`${"Click me"}`)) ``

will evaluate to

`<div name="label"><button class="bg-red-200">Click me</button></div>`

```
import {tag, html} from "structr-composer";

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
```
