export type HtmlEscaped = {isEscaped: true};
export type HtmlEscapedString = string & HtmlEscaped;
export type StringBuffer = [string];

const escapeRe = /[&<>'"]/;

export const escapeToBuffer = (str: string, buffer: StringBuffer): void => {
  const match = str.search(escapeRe);
  if (match === -1) {
    buffer[0] += str;
    return;
  }

  let escape;
  let index;
  let lastIndex = 0;

  for (index = match; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = "&quot;";
        break;
      case 39: // '
        escape = "&#39;";
        break;
      case 38: // &
        escape = "&amp;";
        break;
      case 60: // <
        escape = "&lt;";
        break;
      case 62: // >
        escape = "&gt;";
        break;
      default:
        continue;
    }

    buffer[0] += str.substring(lastIndex, index) + escape;
    lastIndex = index + 1;
  }

  buffer[0] += str.substring(lastIndex, index);
};

export const raw = (value: unknown): HtmlEscapedString => {
  const escapedString = new String(value) as HtmlEscapedString;
  escapedString.isEscaped = true;

  return escapedString;
};

export const html = (
  strings: TemplateStringsArray,
  ...values: unknown[]
): HtmlEscapedString => {
  const buffer: StringBuffer = [""];

  for (let i = 0, len = strings.length - 1; i < len; i++) {
    buffer[0] += strings[i];

    const children =
      values[i] instanceof Array
        ? (values[i] as Array<unknown>).flat(Infinity)
        : [values[i]];
    for (let i = 0, len = children.length; i < len; i++) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const child = children[i] as any;
      if (typeof child === "string") {
        escapeToBuffer(child, buffer);
      } else if (
        typeof child === "boolean" ||
        child === null ||
        child === undefined
      ) {
        continue;
      } else if (
        (typeof child === "object" && (child as HtmlEscaped).isEscaped) ||
        typeof child === "number"
      ) {
        buffer[0] += child;
      } else {
        escapeToBuffer(child.toString(), buffer);
      }
    }
  }
  buffer[0] += strings[strings.length - 1];

  return raw(buffer[0]);
};
