import {HtmlEscapedString, html as escape} from "./html-escape";

export const head = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<head ${att}>${inner}</head>`
);
export const meta = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<meta ${att}>${inner}</meta>`
);
export const link = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<link ${att}>${inner}</link>`
);
export const title = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<title ${att}>${inner}</title>`
);
export const script = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<script ${att}>${inner}</script>`
);
export const html = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<html ${att}>${inner}</html>`
);
export const body = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<body ${att}>${inner}</body>`
);
export const style = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<style ${att}>${inner}</style>`
);
export const address = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<address ${att}>${inner}</address>`
);
export const article = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<article ${att}>${inner}</article>`
);
export const aside = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<aside ${att}>${inner}</aside>`
);
export const footer = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<footer ${att}>${inner}</footer>`
);
export const header = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<header ${att}>${inner}</header>`
);
export const h1 = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<h1 ${att}>${inner}</h1>`
);
export const h2 = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<h2 ${att}>${inner}</h2>`
);
export const h3 = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<h3 ${att}>${inner}</h3>`
);
export const h4 = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<h4 ${att}>${inner}</h4>`
);
export const h5 = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<h5 ${att}>${inner}</h5>`
);
export const main = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<main ${att}>${inner}</main>`
);
export const nav = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<nav ${att}>${inner}</nav>`
);
export const section = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<section ${att}>${inner}</section>`
);
export const blockquote = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<blockquote ${att}>${inner}</blockquote>`
);
export const div = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<div ${att}>${inner}</div>`
);
export const hr = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<hr ${att}>${inner}</hr>`
);
export const li = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<li ${att}>${inner}</li>`
);
export const ol = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<ol ${att}>
      ${inner}
    </ol>`
);
export const p = comp(
  (att: string, ...inner: HtmlEscapedString[]) => escape`<p ${att}>${inner}</p>`
);
export const pre = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<pre ${att}>${inner}</pre>`
);
export const ul = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<ul ${att}>
      ${inner}
    </ul>`
);
export const a = comp(
  (att: string, ...inner: HtmlEscapedString[]) => escape`<a ${att}>${inner}</a>`
);
export const br = comp(() => escape`<br />`);
export const code = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<code ${att}>${inner}</code>`
);
export const em = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<em ${att}>${inner}</em>`
);
export const i = comp(
  (att: string, ...inner: HtmlEscapedString[]) => escape`<i ${att}>${inner}</i>`
);
export const b = comp(
  (att: string, ...inner: HtmlEscapedString[]) => escape`<b ${att}>${inner}</b>`
);
export const small = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<small ${att}>${inner}</small>`
);
export const span = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<span ${att}>${inner}</span>`
);
export const strong = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<strong ${att}>${inner}</strong>`
);
export const sub = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<sub ${att}>${inner}</sub>`
);
export const sup = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<sup ${att}>${inner}</sup>`
);
export const time = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<time ${att}>${inner}</time>`
);
export const area = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<area ${att}>${inner}</area>`
);
export const audio = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<audio ${att}>${inner}</audio>`
);
export const img = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<img ${att}>${inner}</img>`
);
export const map = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<map ${att}>${inner}</map>`
);
export const track = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<track ${att}>${inner}</track>`
);
export const video = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<video ${att}>${inner}</video>`
);
export const embed = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<embed ${att}>${inner}</embed>`
);
export const iframe = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<iframe ${att}>${inner}</iframe>`
);
export const noembed = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<noembed ${att}>${inner}</noembed>`
);
export const object = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<object ${att}>${inner}</object>`
);
export const picture = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<picture ${att}>${inner}</picture>`
);
export const source = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<source ${att}>${inner}</source>`
);
export const canvas = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<canvas ${att}>${inner}</canvas>`
);
export const caption = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<caption ${att}>
      ${inner}
    </caption>`
);
export const col = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<col ${att}>${inner}</col>`
);
export const colgroup = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<colgroup ${att}>
      ${inner}
    </colgroup>`
);
export const table = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<table ${att}>
      ${inner}
    </table>`
);
export const tbody = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<tbody ${att}>
      ${inner}
    </tbody>`
);
export const td = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<td ${att}>${inner}</td>`
);
export const tfoot = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<tfoot ${att}>
      ${inner}
    </tfoot>`
);
export const th = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<th ${att}>${inner}</th>`
);
export const thead = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<thead ${att}>
      ${inner}
    </thead>`
);
export const tr = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<tr ${att}>
      ${inner}
    </tr>`
);
export const button = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<button ${att}>${inner}</button>`
);
export const datalist = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<datalist ${att}>${inner}</datalist>`
);
export const fieldset = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<fieldset ${att}>${inner}</fieldset>`
);
export const form = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<form ${att}>${inner}</form>`
);
export const input = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<input ${att}>${inner}</input>`
);
export const label = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<label ${att}>${inner}</label>`
);
export const legend = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<legend ${att}>${inner}</legend>`
);
export const meter = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<meter ${att}>${inner}</meter>`
);
export const optgroup = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<optgroup ${att}>${inner}</optgroup>`
);
export const option = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<option ${att}>${inner}</option>`
);
export const select = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<select ${att}>
      ${inner}
    </select>`
);
export const textarea = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<textarea ${att}>${inner}</textarea>`
);
export const details = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<details ${att}>${inner}</details>`
);
export const summary = comp(
  (att: string, ...inner: HtmlEscapedString[]) =>
    escape`<summary ${att}>${inner}</summary>`
);

// Utils parser
function genAtt(item: {[x: string]: string}) {
  return Object.keys(item)
    .map((k) => {
      const value = escape`${item[k]}`;
      const key = escape`${k}`;
      return value ? `${key}="${value}"` : `${key}`;
    })
    .join(" ");
}

export function comp(
  a: (att: string, ...inner: HtmlEscapedString[]) => HtmlEscapedString
): (
  i: {[x: string]: string},
  ...children: HtmlEscapedString[]
) => HtmlEscapedString {
  return (o: {[x: string]: string}, ...children: HtmlEscapedString[]) => {
    const att = genAtt(o);
    return a(att, ...children);
  };
}
