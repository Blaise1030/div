# structr-composer

Structr-composer is a lightweight and asynchronous HTML templating library for JavaScript.

Use the functions like html tags

`tag(attributes: {[x:string]: string}, children: string | string[])`

The first parameters will be attributes for the tag and the children, will be it's child.

`div({name:'label'}, button({class:'bg-red-200'}, "Click me"))`

will evaluate to

`<div name="label"><button class="bg-red-200">Click me</button></div>`

```
document.querySelector<HTMLDivElement>("#app")!.innerHTML = div(
  {class: "flex flex-col space-y-4 bg-red-200"},
  div({}, [
    input({type: "search", placeholder: "Search...", name: "key"}, ""),
    select({placholder: "This is the actions", selected: "2"}, [
      option({value: "1"}, "Actions"),
      option({value: "2", selected: ""}, "New Actions"),
      option({value: "3"}, "Actions"),
      option({value: "4"}, "Actions"),
      option({value: "5"}, "Actions"),
    ]),
    span({class: "search-load"}, "Searching..."),
    section({}, div({id: "main-view"}, "")),
  ])
);

```
