export type HtmlEscaped = {
    isEscaped: true;
};
export type HtmlEscapedString = string & HtmlEscaped;
export type StringBuffer = [string];
export declare const escHtml: (strings: TemplateStringsArray, ...values: unknown[]) => HtmlEscapedString;
export declare const head: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const meta: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const link: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const title: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const script: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const html: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const body: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const style: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const address: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const article: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const aside: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const footer: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const header: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const h1: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const h2: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const h3: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const h4: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const h5: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const main: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const nav: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const section: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const blockquote: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const div: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const hr: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const li: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const ol: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const p: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const pre: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const ul: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const a: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const br: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const code: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const em: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const i: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const b: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const small: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const span: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const strong: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const sub: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const sup: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const time: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const area: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const audio: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const img: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const map: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const track: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const video: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const embed: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const iframe: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const noembed: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const object: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const picture: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const source: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const canvas: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const caption: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const col: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const colgroup: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const table: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const tbody: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const td: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const tfoot: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const th: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const thead: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const tr: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const button: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const datalist: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const fieldset: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const form: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const input: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const label: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const legend: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const meter: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const optgroup: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const option: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const select: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const textarea: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const details: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare const summary: (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
export declare function comp(a: (att: string, ...inner: HtmlEscapedString[]) => HtmlEscapedString): (o?: HtmlEscapedString | {
    [x: string]: string;
}, ...children: HtmlEscapedString[]) => HtmlEscapedString;
