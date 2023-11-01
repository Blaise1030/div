export type HtmlEscaped = {
    isEscaped: true;
};
export type HtmlEscapedString = string & HtmlEscaped;
export type StringBuffer = [string];
export declare const escapeToBuffer: (str: string, buffer: StringBuffer) => void;
export declare const raw: (value: unknown) => HtmlEscapedString;
export declare const html: (strings: TemplateStringsArray, ...values: unknown[]) => HtmlEscapedString;
