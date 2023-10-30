export const html = comp(
  (att: string, inner: string | string[]) => `<html ${att}>${inner}</html>`
);
export const address = comp(
  (att: string, inner: string | string[]) =>
    `<address ${att}>${inner}</address>`
);
export const article = comp(
  (att: string, inner: string | string[]) =>
    `<article ${att}>${inner}</article>`
);
export const aside = comp(
  (att: string, inner: string | string[]) => `<aside ${att}>${inner}</aside>`
);
export const footer = comp(
  (att: string, inner: string | string[]) => `<footer ${att}>${inner}</footer>`
);
export const header = comp(
  (att: string, inner: string | string[]) => `<header ${att}>${inner}</header>`
);
export const h1 = comp(
  (att: string, inner: string | string[]) => `<h1 ${att}>${inner}</h1>`
);
export const h2 = comp(
  (att: string, inner: string | string[]) => `<h2 ${att}>${inner}</h2>`
);
export const h3 = comp(
  (att: string, inner: string | string[]) => `<h3 ${att}>${inner}</h3>`
);
export const h4 = comp(
  (att: string, inner: string | string[]) => `<h4 ${att}>${inner}</h4>`
);
export const h5 = comp(
  (att: string, inner: string | string[]) => `<h5 ${att}>${inner}</h5>`
);
export const main = comp(
  (att: string, inner: string | string[]) => `<main ${att}>${inner}</main>`
);
export const nav = comp(
  (att: string, inner: string | string[]) => `<nav ${att}>${inner}</nav>`
);
export const section = comp(
  (att: string, inner: string | string[]) =>
    `<section ${att}>${inner}</section>`
);
export const blockquote = comp(
  (att: string, inner: string | string[]) =>
    `<blockquote ${att}>${inner}</blockquote>`
);
export const div = comp(
  (att: string, inner: string | string[]) => `<div ${att}>${inner}</div>`
);
export const hr = comp(
  (att: string, inner: string | string[]) => `<hr ${att}>${inner}</hr>`
);
export const li = comp(
  (att: string, inner: string | string[]) => `<li ${att}>${inner}</li>`
);
export const ol = comp(
  (att: string, inner: string | string[]) => `<ol ${att}>${inner}</ol>`
);
export const p = comp(
  (att: string, inner: string | string[]) => `<p ${att}>${inner}</p>`
);
export const pre = comp(
  (att: string, inner: string | string[]) => `<pre ${att}>${inner}</pre>`
);
export const ul = comp(
  (att: string, inner: string | string[]) => `<ul ${att}>${inner}</ul>`
);
export const a = comp(
  (att: string, inner: string | string[]) => `<a ${att}>${inner}</a>`
);
export const br = comp(() => `<br>`);
export const code = comp(
  (att: string, inner: string | string[]) => `<code ${att}>${inner}</code>`
);
export const em = comp(
  (att: string, inner: string | string[]) => `<em ${att}>${inner}</em>`
);
export const i = comp(
  (att: string, inner: string | string[]) => `<i ${att}>${inner}</i>`
);
export const b = comp(
  (att: string, inner: string | string[]) => `<b ${att}>${inner}</b>`
);
export const small = comp(
  (att: string, inner: string | string[]) => `<small ${att}>${inner}</small>`
);
export const span = comp(
  (att: string, inner: string | string[]) => `<span ${att}>${inner}</span>`
);
export const strong = comp(
  (att: string, inner: string | string[]) => `<strong ${att}>${inner}</strong>`
);
export const sub = comp(
  (att: string, inner: string | string[]) => `<sub ${att}>${inner}</sub>`
);
export const sup = comp(
  (att: string, inner: string | string[]) => `<sup ${att}>${inner}</sup>`
);
export const time = comp(
  (att: string, inner: string | string[]) => `<time ${att}>${inner}</time>`
);
export const area = comp(
  (att: string, inner: string | string[]) => `<area ${att}>${inner}</area>`
);
export const audio = comp(
  (att: string, inner: string | string[]) => `<audio ${att}>${inner}</audio>`
);
export const img = comp(
  (att: string, inner: string | string[]) => `<img ${att}>${inner}</img>`
);
export const map = comp(
  (att: string, inner: string | string[]) => `<map ${att}>${inner}</map>`
);
export const track = comp(
  (att: string, inner: string | string[]) => `<track ${att}>${inner}</track>`
);
export const video = comp(
  (att: string, inner: string | string[]) => `<video ${att}>${inner}</video>`
);
export const embed = comp(
  (att: string, inner: string | string[]) => `<embed ${att}>${inner}</embed>`
);
export const iframe = comp(
  (att: string, inner: string | string[]) => `<iframe ${att}>${inner}</iframe>`
);
export const noembed = comp(
  (att: string, inner: string | string[]) =>
    `<noembed ${att}>${inner}</noembed>`
);
export const object = comp(
  (att: string, inner: string | string[]) => `<object ${att}>${inner}</object>`
);
export const picture = comp(
  (att: string, inner: string | string[]) =>
    `<picture ${att}>${inner}</picture>`
);
export const source = comp(
  (att: string, inner: string | string[]) => `<source ${att}>${inner}</source>`
);
export const canvas = comp(
  (att: string, inner: string | string[]) => `<canvas ${att}>${inner}</canvas>`
);
export const caption = comp(
  (att: string, inner: string | string[]) =>
    `<caption ${att}>${inner}</caption>`
);
export const col = comp(
  (att: string, inner: string | string[]) => `<col ${att}>${inner}</col>`
);
export const colgroup = comp(
  (att: string, inner: string | string[]) =>
    `<colgroup ${att}>${inner}</colgroup>`
);
export const table = comp(
  (att: string, inner: string | string[]) => `<table ${att}>${inner}</table>`
);
export const tbody = comp(
  (att: string, inner: string | string[]) => `<tbody ${att}>${inner}</tbody>`
);
export const td = comp(
  (att: string, inner: string | string[]) => `<td ${att}>${inner}</td>`
);
export const tfoot = comp(
  (att: string, inner: string | string[]) => `<tfoot ${att}>${inner}</tfoot>`
);
export const th = comp(
  (att: string, inner: string | string[]) => `<th ${att}>${inner}</th>`
);
export const thead = comp(
  (att: string, inner: string | string[]) => `<thead ${att}>${inner}</thead>`
);
export const tr = comp(
  (att: string, inner: string | string[]) => `<tr ${att}>${inner}</tr>`
);
export const button = comp(
  (att: string, inner: string | string[]) => `<button ${att}>${inner}</button>`
);
export const datalist = comp(
  (att: string, inner: string | string[]) =>
    `<datalist ${att}>${inner}</datalist>`
);
export const fieldset = comp(
  (att: string, inner: string | string[]) =>
    `<fieldset ${att}>${inner}</fieldset>`
);
export const form = comp(
  (att: string, inner: string | string[]) => `<form ${att}>${inner}</form>`
);
export const input = comp(
  (att: string, inner: string | string[]) => `<input ${att}>${inner}</input>`
);
export const label = comp(
  (att: string, inner: string | string[]) => `<label ${att}>${inner}</label>`
);
export const legend = comp(
  (att: string, inner: string | string[]) => `<legend ${att}>${inner}</legend>`
);
export const meter = comp(
  (att: string, inner: string | string[]) => `<meter ${att}>${inner}</meter>`
);
export const optgroup = comp(
  (att: string, inner: string | string[]) =>
    `<optgroup ${att}>${inner}</optgroup>`
);
export const option = comp(
  (att: string, inner: string | string[]) => `<option ${att}>${inner}</option>`
);
export const select = comp(
  (att: string, inner: string | string[]) => `<select ${att}>${inner}</select>`
);
export const textarea = comp(
  (att: string, inner: string | string[]) =>
    `<textarea ${att}>${inner}</textarea>`
);
export const details = comp(
  (att: string, inner: string | string[]) =>
    `<details ${att}>${inner}</details>`
);
export const summary = comp(
  (att: string, inner: string | string[]) =>
    `<summary ${att}>${inner}</summary>`
);

// Utils parser
function genAtt(item: {[x: string]: string}) {
  return Object.keys(item)
    .map((k) => {
      const value = escapeHtml(item[k]);
      const key = escapeHtml(k);
      return value ? `${key}="${value}"` : `${key}`;
    })
    .join(" ");
}

export function comp(
  a: (att: string, inner: string | string[]) => string
): (i: {[x: string]: string}, children: string[] | string) => string {
  return (o: {[x: string]: string}, children: string[] | string) => {
    const att = genAtt(o);
    const parse = typeof children === "string" ? children : children.join(" ");
    return a(att, parse);
  };
}
function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
