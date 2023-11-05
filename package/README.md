# structr-composer

Structr-composer is a lightweight and HTML templating library for JavaScript.

Use the functions like html tags

`tag(first: {[x:string]: string} | HtmlEscapedString | undefined , ...children: HtmlEscapedString[])`

The first parameters will be attributes for the tag and the children, will be it's child. You would need to escape strings when passing them into each tags to prevent xss attacks.

`` div({name:'label'}, button({class:'bg-red-200'}, escHtml`${"Click me"}`)) ``

will evaluate to

`<div name="label"><button class="bg-red-200">Click me</button></div>`

```
import {button, div, escHtml, input} from "structr-composer";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = div(
  {class: "flex flex-col space-y-4 bg-red-200"},
  div(
    input({type: "search", placeholder: "Search...", name: "key"}),
    button(escHtml`${`<img onerror='alert("Blaise")' src="1" />`}`),
    input({type: "search", placeholder: "Search...", name: "key"}),
    input({type: "search", placeholder: "Search...", name: "key"}),
    input({type: "search", placeholder: "Search...", name: "key"}),
    input({type: "search", placeholder: "Search...", name: "key"})
  )
);
```
