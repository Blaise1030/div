import {a, br, div, escHtml, span} from "structr-composer";
import {
  AccordianContent,
  AccordianTrigger,
  AccordianItem,
  Accordian,
} from "./components/Accordian";
import {Banner} from "./components/Banner";
import Button from "./components/Button";
import close from "./components/icon/close";
import HoverCard, {
  HoverCardContent,
  HoverCardTrigger,
} from "./components/HoverCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuDivider,
  DropdownMenuItem,
  DropdownMenuItemIcon,
  DropdownMenuTitle,
  DropdownMenuTrigger,
  DropdownSubGroup,
  DropdownSubGroupContent,
  DropdownSubGroupTrigger,
} from "./components/DropdownMenu";
import Badge from "./components/Badge";
import {Switch} from "./components/Switch";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = div(
  {class: "p-4", "x-data": `{accordian: '1'}`},
  Banner(
    {},
    div(
      {class: "flex p-1 items-center"},
      div(
        {class: "flex flex-1 items-center h-full p-1.5 divide-x divide-border"},
        div({class: "font-semibold pr-2 text-sm"}, escHtml`New Feature`),
        div(
          {class: "flex flex-row pl-2 text-xs"},
          div(escHtml`Click here to learn about our latest feature`)
        )
      ),
      Button(
        {"@click": "close()", variant: "ghost", class: "h-5 w-5", size: "icon"},
        close
      )
    )
  ),
  div({"x-data": "{open:true}"}, Switch({value: "open"})),
  Badge({variant: "destructive"}, escHtml`Blaise`),
  DropdownMenu(
    {},
    DropdownMenuTrigger({}, Button({variant: "outline"}, escHtml`Trigger`)),
    DropdownMenuContent(
      {},
      DropdownMenuTitle({}, escHtml`My Account`),
      DropdownMenuDivider(),
      DropdownMenuItem(
        {"@click": `console.log('Profile')`},
        span(escHtml`Profile`),
        DropdownMenuItemIcon({}, escHtml`⇧⌘P`)
      ),
      DropdownMenuItem(
        {},
        span(escHtml`Billing`),
        DropdownMenuItemIcon({}, escHtml`⌘B`)
      ),
      DropdownMenuItem(
        {},
        span({}, escHtml`Settings`),
        DropdownMenuItemIcon({}, escHtml`⌘S`)
      ),
      DropdownMenuItem(
        {},
        span({}, escHtml`Keyboard shortcuts`),
        DropdownMenuItemIcon({}, escHtml`⌘K`)
      ),
      DropdownMenuDivider(),
      DropdownMenuTitle({}, escHtml`My Account`),
      DropdownMenuDivider(),
      DropdownMenuItem({}, span({}, escHtml`Team`)),
      DropdownSubGroup(
        {},
        DropdownSubGroupTrigger({}, escHtml`This is the thing`),
        DropdownSubGroupContent(
          {},
          DropdownMenuItem({}, span({}, escHtml`Invite users`)),
          DropdownMenuItem({}, span({}, escHtml`Email`)),
          DropdownMenuItem({}, span({}, escHtml`Message`)),
          DropdownMenuItem({}, span({}, escHtml`More...`))
        )
      )
    )
  ),
  HoverCard(
    {},
    HoverCardTrigger(
      {},
      a({href: "#_", class: "hover:underline"}, escHtml`@thedevdojo`)
    ),
    HoverCardContent({}, div({}, escHtml`Blaise`))
  ),
  Button({"@click": "setTheme(theme==='dark'?'light':'dark')"}, escHtml`Light`),
  Accordian(
    {value: "accordian"},
    AccordianItem(
      {id: "1"},
      AccordianTrigger({}, escHtml`Blaise 1`),
      AccordianContent({}, escHtml`Blaise 1 Content`)
    ),
    AccordianItem(
      {id: "2"},
      AccordianTrigger({}, escHtml`Blaise 2`),
      AccordianContent({}, escHtml`Blaise 2 Content`)
    ),
    AccordianItem(
      {id: "3"},
      AccordianTrigger({}, escHtml`Blaise 3`),
      AccordianContent({}, escHtml`Blaise 3 Content`)
    )
  )
);
