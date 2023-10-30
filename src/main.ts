import {div, input, option, section, select, span} from "structr-composer";

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
