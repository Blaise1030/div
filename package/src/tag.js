"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noembed = exports.iframe = exports.embed = exports.video = exports.track = exports.map = exports.img = exports.audio = exports.area = exports.time = exports.sup = exports.sub = exports.strong = exports.span = exports.small = exports.b = exports.i = exports.em = exports.code = exports.br = exports.a = exports.ul = exports.pre = exports.p = exports.ol = exports.li = exports.hr = exports.div = exports.blockquote = exports.section = exports.nav = exports.main = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.header = exports.footer = exports.aside = exports.article = exports.address = exports.style = exports.body = exports.html = exports.script = exports.title = exports.link = exports.meta = exports.head = void 0;
exports.comp = exports.summary = exports.details = exports.textarea = exports.select = exports.option = exports.optgroup = exports.meter = exports.legend = exports.label = exports.input = exports.form = exports.fieldset = exports.datalist = exports.button = exports.tr = exports.thead = exports.th = exports.tfoot = exports.td = exports.tbody = exports.table = exports.colgroup = exports.col = exports.caption = exports.canvas = exports.source = exports.picture = exports.object = void 0;
var html_escape_1 = require("./html-escape");
exports.head = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<head ", ">", "</head>"], ["<head ", ">", "</head>"])), att, inner);
});
exports.meta = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<meta ", ">", "</meta>"], ["<meta ", ">", "</meta>"])), att, inner);
});
exports.link = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<link ", ">", "</link>"], ["<link ", ">", "</link>"])), att, inner);
});
exports.title = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<title ", ">", "</title>"], ["<title ", ">", "</title>"])), att, inner);
});
exports.script = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["<script ", ">", "</script>"], ["<script ", ">", "</script>"])), att, inner);
});
exports.html = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["<html ", ">", "</html>"], ["<html ", ">", "</html>"])), att, inner);
});
exports.body = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["<body ", ">", "</body>"], ["<body ", ">", "</body>"])), att, inner);
});
exports.style = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["<style ", ">", "</style>"], ["<style ", ">", "</style>"])), att, inner);
});
exports.address = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["<address ", ">", "</address>"], ["<address ", ">", "</address>"])), att, inner);
});
exports.article = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["<article ", ">", "</article>"], ["<article ", ">", "</article>"])), att, inner);
});
exports.aside = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["<aside ", ">", "</aside>"], ["<aside ", ">", "</aside>"])), att, inner);
});
exports.footer = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["<footer ", ">", "</footer>"], ["<footer ", ">", "</footer>"])), att, inner);
});
exports.header = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["<header ", ">", "</header>"], ["<header ", ">", "</header>"])), att, inner);
});
exports.h1 = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["<h1 ", ">", "</h1>"], ["<h1 ", ">", "</h1>"])), att, inner);
});
exports.h2 = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["<h2 ", ">", "</h2>"], ["<h2 ", ">", "</h2>"])), att, inner);
});
exports.h3 = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["<h3 ", ">", "</h3>"], ["<h3 ", ">", "</h3>"])), att, inner);
});
exports.h4 = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["<h4 ", ">", "</h4>"], ["<h4 ", ">", "</h4>"])), att, inner);
});
exports.h5 = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_18 || (templateObject_18 = __makeTemplateObject(["<h5 ", ">", "</h5>"], ["<h5 ", ">", "</h5>"])), att, inner);
});
exports.main = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["<main ", ">", "</main>"], ["<main ", ">", "</main>"])), att, inner);
});
exports.nav = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_20 || (templateObject_20 = __makeTemplateObject(["<nav ", ">", "</nav>"], ["<nav ", ">", "</nav>"])), att, inner);
});
exports.section = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_21 || (templateObject_21 = __makeTemplateObject(["<section ", ">", "</section>"], ["<section ", ">", "</section>"])), att, inner);
});
exports.blockquote = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_22 || (templateObject_22 = __makeTemplateObject(["<blockquote ", ">", "</blockquote>"], ["<blockquote ", ">", "</blockquote>"])), att, inner);
});
exports.div = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_23 || (templateObject_23 = __makeTemplateObject(["<div ", ">", "</div>"], ["<div ", ">", "</div>"])), att, inner);
});
exports.hr = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_24 || (templateObject_24 = __makeTemplateObject(["<hr ", ">", "</hr>"], ["<hr ", ">", "</hr>"])), att, inner);
});
exports.li = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_25 || (templateObject_25 = __makeTemplateObject(["<li ", ">", "</li>"], ["<li ", ">", "</li>"])), att, inner);
});
exports.ol = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_26 || (templateObject_26 = __makeTemplateObject(["<ol ", ">\n      ", "\n    </ol>"], ["<ol ", ">\n      ", "\n    </ol>"])), att, inner);
});
exports.p = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_27 || (templateObject_27 = __makeTemplateObject(["<p ", ">", "</p>"], ["<p ", ">", "</p>"])), att, inner);
});
exports.pre = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_28 || (templateObject_28 = __makeTemplateObject(["<pre ", ">", "</pre>"], ["<pre ", ">", "</pre>"])), att, inner);
});
exports.ul = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_29 || (templateObject_29 = __makeTemplateObject(["<ul ", ">\n      ", "\n    </ul>"], ["<ul ", ">\n      ", "\n    </ul>"])), att, inner);
});
exports.a = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_30 || (templateObject_30 = __makeTemplateObject(["<a ", ">", "</a>"], ["<a ", ">", "</a>"])), att, inner);
});
exports.br = comp(function () { return (0, html_escape_1.html)(templateObject_31 || (templateObject_31 = __makeTemplateObject(["<br />"], ["<br />"]))); });
exports.code = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_32 || (templateObject_32 = __makeTemplateObject(["<code ", ">", "</code>"], ["<code ", ">", "</code>"])), att, inner);
});
exports.em = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_33 || (templateObject_33 = __makeTemplateObject(["<em ", ">", "</em>"], ["<em ", ">", "</em>"])), att, inner);
});
exports.i = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_34 || (templateObject_34 = __makeTemplateObject(["<i ", ">", "</i>"], ["<i ", ">", "</i>"])), att, inner);
});
exports.b = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_35 || (templateObject_35 = __makeTemplateObject(["<b ", ">", "</b>"], ["<b ", ">", "</b>"])), att, inner);
});
exports.small = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_36 || (templateObject_36 = __makeTemplateObject(["<small ", ">", "</small>"], ["<small ", ">", "</small>"])), att, inner);
});
exports.span = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_37 || (templateObject_37 = __makeTemplateObject(["<span ", ">", "</span>"], ["<span ", ">", "</span>"])), att, inner);
});
exports.strong = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_38 || (templateObject_38 = __makeTemplateObject(["<strong ", ">", "</strong>"], ["<strong ", ">", "</strong>"])), att, inner);
});
exports.sub = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_39 || (templateObject_39 = __makeTemplateObject(["<sub ", ">", "</sub>"], ["<sub ", ">", "</sub>"])), att, inner);
});
exports.sup = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_40 || (templateObject_40 = __makeTemplateObject(["<sup ", ">", "</sup>"], ["<sup ", ">", "</sup>"])), att, inner);
});
exports.time = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_41 || (templateObject_41 = __makeTemplateObject(["<time ", ">", "</time>"], ["<time ", ">", "</time>"])), att, inner);
});
exports.area = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_42 || (templateObject_42 = __makeTemplateObject(["<area ", ">", "</area>"], ["<area ", ">", "</area>"])), att, inner);
});
exports.audio = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_43 || (templateObject_43 = __makeTemplateObject(["<audio ", ">", "</audio>"], ["<audio ", ">", "</audio>"])), att, inner);
});
exports.img = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_44 || (templateObject_44 = __makeTemplateObject(["<img ", ">", "</img>"], ["<img ", ">", "</img>"])), att, inner);
});
exports.map = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_45 || (templateObject_45 = __makeTemplateObject(["<map ", ">", "</map>"], ["<map ", ">", "</map>"])), att, inner);
});
exports.track = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_46 || (templateObject_46 = __makeTemplateObject(["<track ", ">", "</track>"], ["<track ", ">", "</track>"])), att, inner);
});
exports.video = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_47 || (templateObject_47 = __makeTemplateObject(["<video ", ">", "</video>"], ["<video ", ">", "</video>"])), att, inner);
});
exports.embed = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_48 || (templateObject_48 = __makeTemplateObject(["<embed ", ">", "</embed>"], ["<embed ", ">", "</embed>"])), att, inner);
});
exports.iframe = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_49 || (templateObject_49 = __makeTemplateObject(["<iframe ", ">", "</iframe>"], ["<iframe ", ">", "</iframe>"])), att, inner);
});
exports.noembed = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_50 || (templateObject_50 = __makeTemplateObject(["<noembed ", ">", "</noembed>"], ["<noembed ", ">", "</noembed>"])), att, inner);
});
exports.object = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_51 || (templateObject_51 = __makeTemplateObject(["<object ", ">", "</object>"], ["<object ", ">", "</object>"])), att, inner);
});
exports.picture = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_52 || (templateObject_52 = __makeTemplateObject(["<picture ", ">", "</picture>"], ["<picture ", ">", "</picture>"])), att, inner);
});
exports.source = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_53 || (templateObject_53 = __makeTemplateObject(["<source ", ">", "</source>"], ["<source ", ">", "</source>"])), att, inner);
});
exports.canvas = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_54 || (templateObject_54 = __makeTemplateObject(["<canvas ", ">", "</canvas>"], ["<canvas ", ">", "</canvas>"])), att, inner);
});
exports.caption = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_55 || (templateObject_55 = __makeTemplateObject(["<caption ", ">\n      ", "\n    </caption>"], ["<caption ", ">\n      ", "\n    </caption>"])), att, inner);
});
exports.col = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_56 || (templateObject_56 = __makeTemplateObject(["<col ", ">", "</col>"], ["<col ", ">", "</col>"])), att, inner);
});
exports.colgroup = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_57 || (templateObject_57 = __makeTemplateObject(["<colgroup ", ">\n      ", "\n    </colgroup>"], ["<colgroup ", ">\n      ", "\n    </colgroup>"])), att, inner);
});
exports.table = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_58 || (templateObject_58 = __makeTemplateObject(["<table ", ">\n      ", "\n    </table>"], ["<table ", ">\n      ", "\n    </table>"])), att, inner);
});
exports.tbody = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_59 || (templateObject_59 = __makeTemplateObject(["<tbody ", ">\n      ", "\n    </tbody>"], ["<tbody ", ">\n      ", "\n    </tbody>"])), att, inner);
});
exports.td = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_60 || (templateObject_60 = __makeTemplateObject(["<td ", ">", "</td>"], ["<td ", ">", "</td>"])), att, inner);
});
exports.tfoot = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_61 || (templateObject_61 = __makeTemplateObject(["<tfoot ", ">\n      ", "\n    </tfoot>"], ["<tfoot ", ">\n      ", "\n    </tfoot>"])), att, inner);
});
exports.th = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_62 || (templateObject_62 = __makeTemplateObject(["<th ", ">", "</th>"], ["<th ", ">", "</th>"])), att, inner);
});
exports.thead = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_63 || (templateObject_63 = __makeTemplateObject(["<thead ", ">\n      ", "\n    </thead>"], ["<thead ", ">\n      ", "\n    </thead>"])), att, inner);
});
exports.tr = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_64 || (templateObject_64 = __makeTemplateObject(["<tr ", ">\n      ", "\n    </tr>"], ["<tr ", ">\n      ", "\n    </tr>"])), att, inner);
});
exports.button = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_65 || (templateObject_65 = __makeTemplateObject(["<button ", ">", "</button>"], ["<button ", ">", "</button>"])), att, inner);
});
exports.datalist = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_66 || (templateObject_66 = __makeTemplateObject(["<datalist ", ">", "</datalist>"], ["<datalist ", ">", "</datalist>"])), att, inner);
});
exports.fieldset = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_67 || (templateObject_67 = __makeTemplateObject(["<fieldset ", ">", "</fieldset>"], ["<fieldset ", ">", "</fieldset>"])), att, inner);
});
exports.form = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_68 || (templateObject_68 = __makeTemplateObject(["<form ", ">", "</form>"], ["<form ", ">", "</form>"])), att, inner);
});
exports.input = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_69 || (templateObject_69 = __makeTemplateObject(["<input ", ">", "</input>"], ["<input ", ">", "</input>"])), att, inner);
});
exports.label = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_70 || (templateObject_70 = __makeTemplateObject(["<label ", ">", "</label>"], ["<label ", ">", "</label>"])), att, inner);
});
exports.legend = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_71 || (templateObject_71 = __makeTemplateObject(["<legend ", ">", "</legend>"], ["<legend ", ">", "</legend>"])), att, inner);
});
exports.meter = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_72 || (templateObject_72 = __makeTemplateObject(["<meter ", ">", "</meter>"], ["<meter ", ">", "</meter>"])), att, inner);
});
exports.optgroup = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_73 || (templateObject_73 = __makeTemplateObject(["<optgroup ", ">", "</optgroup>"], ["<optgroup ", ">", "</optgroup>"])), att, inner);
});
exports.option = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_74 || (templateObject_74 = __makeTemplateObject(["<option ", ">", "</option>"], ["<option ", ">", "</option>"])), att, inner);
});
exports.select = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_75 || (templateObject_75 = __makeTemplateObject(["<select ", ">\n      ", "\n    </select>"], ["<select ", ">\n      ", "\n    </select>"])), att, inner);
});
exports.textarea = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_76 || (templateObject_76 = __makeTemplateObject(["<textarea ", ">", "</textarea>"], ["<textarea ", ">", "</textarea>"])), att, inner);
});
exports.details = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_77 || (templateObject_77 = __makeTemplateObject(["<details ", ">", "</details>"], ["<details ", ">", "</details>"])), att, inner);
});
exports.summary = comp(function (att) {
    var inner = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inner[_i - 1] = arguments[_i];
    }
    return (0, html_escape_1.html)(templateObject_78 || (templateObject_78 = __makeTemplateObject(["<summary ", ">", "</summary>"], ["<summary ", ">", "</summary>"])), att, inner);
});
// Utils parser
function genAtt(item) {
    return Object.keys(item)
        .map(function (k) {
        var value = (0, html_escape_1.html)(templateObject_79 || (templateObject_79 = __makeTemplateObject(["", ""], ["", ""])), item[k]);
        var key = (0, html_escape_1.html)(templateObject_80 || (templateObject_80 = __makeTemplateObject(["", ""], ["", ""])), k);
        return value ? "".concat(key, "=\"").concat(value, "\"") : "".concat(key);
    })
        .join(" ");
}
function comp(a) {
    return function (o) {
        var children = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            children[_i - 1] = arguments[_i];
        }
        var att = genAtt(o);
        return a.apply(void 0, __spreadArray([att], children, false));
    };
}
exports.comp = comp;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43, templateObject_44, templateObject_45, templateObject_46, templateObject_47, templateObject_48, templateObject_49, templateObject_50, templateObject_51, templateObject_52, templateObject_53, templateObject_54, templateObject_55, templateObject_56, templateObject_57, templateObject_58, templateObject_59, templateObject_60, templateObject_61, templateObject_62, templateObject_63, templateObject_64, templateObject_65, templateObject_66, templateObject_67, templateObject_68, templateObject_69, templateObject_70, templateObject_71, templateObject_72, templateObject_73, templateObject_74, templateObject_75, templateObject_76, templateObject_77, templateObject_78, templateObject_79, templateObject_80;
