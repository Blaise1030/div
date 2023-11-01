"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.html = exports.raw = exports.escapeToBuffer = void 0;
var escapeRe = /[&<>'"]/;
var escapeToBuffer = function (str, buffer) {
    var match = str.search(escapeRe);
    if (match === -1) {
        buffer[0] += str;
        return;
    }
    var escape;
    var index;
    var lastIndex = 0;
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
exports.escapeToBuffer = escapeToBuffer;
var raw = function (value) {
    var escapedString = new String(value);
    escapedString.isEscaped = true;
    return escapedString;
};
exports.raw = raw;
var html = function (strings) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var buffer = [""];
    for (var i = 0, len = strings.length - 1; i < len; i++) {
        buffer[0] += strings[i];
        var children = values[i] instanceof Array
            ? values[i].flat(Infinity)
            : [values[i]];
        for (var i_1 = 0, len_1 = children.length; i_1 < len_1; i_1++) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var child = children[i_1];
            if (typeof child === "string") {
                (0, exports.escapeToBuffer)(child, buffer);
            }
            else if (typeof child === "boolean" ||
                child === null ||
                child === undefined) {
                continue;
            }
            else if ((typeof child === "object" && child.isEscaped) ||
                typeof child === "number") {
                buffer[0] += child;
            }
            else {
                (0, exports.escapeToBuffer)(child.toString(), buffer);
            }
        }
    }
    buffer[0] += strings[strings.length - 1];
    return (0, exports.raw)(buffer[0]);
};
exports.html = html;
