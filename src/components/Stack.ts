import cn from "./utils/cn";
import {HtmlEscapedString, div} from "structr-composer";

export default function Stack(
  props: {[x: string]: string} & {direction: "column" | "row"},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...props,
      class: cn([
        "flex",
        {column: "flex-col", row: "flex-row"}[props?.direction],
        props?.class,
      ]),
    },
    ...children
  );
}
