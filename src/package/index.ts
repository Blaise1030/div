// HTML Escape

export type HtmlEscaped = {isEscaped: true};
export type HtmlEscapedString = string & HtmlEscaped;
export type StringBuffer = [string];

const escapeRe = /[&<>'"]/;

const escapeToBuffer = (str: string, buffer: StringBuffer): void => {
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

const raw = (value: unknown): HtmlEscapedString => {
  const escapedString = new String(value) as HtmlEscapedString;
  escapedString.isEscaped = true;

  return escapedString;
};

export const escHtml = (
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

// Tags Escape

export const head = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<head ${att}>${inner}</head>`
);
export const meta = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<meta ${att}>${inner}</meta>`
);
export const link = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<link ${att}>${inner}</link>`
);
export const title = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<title ${att}>${inner}</title>`
);
export const script = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<script ${att}>${inner}</script>`
);
export const html = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<html ${att}>${inner}</html>`
);
export const body = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<body ${att}>${inner}</body>`
);
export const style = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<style ${att}>${inner}</style>`
);
export const address = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<address ${att}>${inner}</address>`
);
export const article = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<article ${att}>${inner}</article>`
);
export const aside = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<aside ${att}>${inner}</aside>`
);
export const footer = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<footer ${att}>${inner}</footer>`
);
export const header = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<header ${att}>${inner}</header>`
);
export const h1 = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<h1 ${att}>${inner}</h1>`
);
export const h2 = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<h2 ${att}>${inner}</h2>`
);
export const h3 = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<h3 ${att}>${inner}</h3>`
);
export const h4 = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<h4 ${att}>${inner}</h4>`
);
export const h5 = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<h5 ${att}>${inner}</h5>`
);
export const main = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<main ${att}>${inner}</main>`
);
export const nav = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<nav ${att}>${inner}</nav>`
);
export const section = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<section ${att}>${inner}</section>`
);
export const blockquote = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<blockquote ${att}>${inner}</blockquote>`
);
export const div = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<div ${att}>${inner}</div>`
);
export const hr = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<hr ${att}>${inner}</hr>`
);
export const li = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<li ${att}>${inner}</li>`
);
export const ol = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<ol ${att}>
      ${inner}
    </ol>`
);
export const p = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<p ${att}>${inner}</p>`
);
export const pre = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<pre ${att}>${inner}</pre>`
);
export const ul = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<ul ${att}>
      ${inner}
    </ul>`
);
export const a = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<a ${att}>${inner}</a>`
);
export const br = comp(() => escHtml`<br />`);
export const code = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<code ${att}>${inner}</code>`
);
export const em = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<em ${att}>${inner}</em>`
);
export const i = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<i ${att}>${inner}</i>`
);
export const b = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<b ${att}>${inner}</b>`
);
export const small = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<small ${att}>${inner}</small>`
);
export const span = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<span ${att}>${inner}</span>`
);
export const strong = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<strong ${att}>${inner}</strong>`
);
export const sub = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<sub ${att}>${inner}</sub>`
);
export const sup = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<sup ${att}>${inner}</sup>`
);
export const time = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<time ${att}>${inner}</time>`
);
export const area = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<area ${att}>${inner}</area>`
);
export const audio = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<audio ${att}>${inner}</audio>`
);
export const img = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<img ${att}>${inner}</img>`
);
export const map = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<map ${att}>${inner}</map>`
);
export const track = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<track ${att}>${inner}</track>`
);
export const video = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<video ${att}>${inner}</video>`
);
export const embed = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<embed ${att}>${inner}</embed>`
);
export const iframe = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<iframe ${att}>${inner}</iframe>`
);
export const noembed = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<noembed ${att}>${inner}</noembed>`
);
export const object = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<object ${att}>${inner}</object>`
);
export const picture = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<picture ${att}>${inner}</picture>`
);
export const source = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<source ${att}>${inner}</source>`
);
export const canvas = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<canvas ${att}>${inner}</canvas>`
);
export const caption = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<caption ${att}>
      ${inner}
    </caption>`
);
export const col = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<col ${att}>${inner}</col>`
);
export const colgroup = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<colgroup ${att}>
      ${inner}
    </colgroup>`
);
export const table = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<table ${att}>
      ${inner}
    </table>`
);
export const tbody = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<tbody ${att}>
      ${inner}
    </tbody>`
);
export const td = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<td ${att}>${inner}</td>`
);
export const tfoot = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<tfoot ${att}>
      ${inner}
    </tfoot>`
);
export const th = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<th ${att}>${inner}</th>`
);
export const thead = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<thead ${att}>
      ${inner}
    </thead>`
);
export const tr = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<tr ${att}>
      ${inner}
    </tr>`
);
export const button = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<button ${att}>${inner}</button>`
);
export const datalist = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<datalist ${att}>${inner}</datalist>`
);
export const fieldset = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<fieldset ${att}>${inner}</fieldset>`
);
export const form = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<form ${att}>${inner}</form>`
);
export const input = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<input ${att}>${inner}</input>`
);
export const label = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<label ${att}>${inner}</label>`
);
export const legend = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<legend ${att}>${inner}</legend>`
);
export const meter = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<meter ${att}>${inner}</meter>`
);
export const optgroup = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<optgroup ${att}>${inner}</optgroup>`
);
export const option = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<option ${att}>${inner}</option>`
);
export const select = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<select ${att}>
      ${inner}
    </select>`
);
export const textarea = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<textarea ${att}>${inner}</textarea>`
);
export const details = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<details ${att}>${inner}</details>`
);
export const summary = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escHtml`<summary ${att}>${inner}</summary>`
);

// Utils parser
function genAtt(item: {[x: string]: string}) {
  return Object.keys(item)
    .map((k) => {
      const value = escHtml`${item[k]}`;
      const key = k;
      return value ? `${key}="${value}"` : `${key}`;
    })
    .join(" ");
}

export function comp(
  a: (att: string, ...inner: HtmlEscapedString[]) => HtmlEscapedString
) {
  return (
    o?: {[x: string]: string} | HtmlEscapedString | undefined,
    ...children: HtmlEscapedString[]
  ) => {
    if (typeof o === "string" || typeof o === "undefined") {
      return a("", ...children);
    } else {
      const att = genAtt(o);
      return a(raw(att), ...children);
    }
  };
}
