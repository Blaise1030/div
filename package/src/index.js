"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colgroup = exports.col = exports.caption = exports.canvas = exports.source = exports.picture = exports.object = exports.noembed = exports.iframe = exports.embed = exports.video = exports.track = exports.map = exports.img = exports.audio = exports.area = exports.time = exports.sup = exports.sub = exports.strong = exports.span = exports.small = exports.b = exports.i = exports.em = exports.code = exports.br = exports.a = exports.ul = exports.pre = exports.p = exports.ol = exports.li = exports.hr = exports.div = exports.blockquote = exports.section = exports.nav = exports.main = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.header = exports.footer = exports.aside = exports.article = exports.address = exports.html = void 0;
exports.comp = exports.summary = exports.details = exports.textarea = exports.select = exports.option = exports.optgroup = exports.meter = exports.legend = exports.label = exports.input = exports.form = exports.fieldset = exports.datalist = exports.button = exports.tr = exports.thead = exports.th = exports.tfoot = exports.td = exports.tbody = exports.table = void 0;
exports.html = comp(function (att, inner) { return "<html ".concat(att, ">").concat(inner, "</html>"); });
exports.address = comp(function (att, inner) {
    return "<address ".concat(att, ">").concat(inner, "</address>");
});
exports.article = comp(function (att, inner) {
    return "<article ".concat(att, ">").concat(inner, "</article>");
});
exports.aside = comp(function (att, inner) { return "<aside ".concat(att, ">").concat(inner, "</aside>"); });
exports.footer = comp(function (att, inner) { return "<footer ".concat(att, ">").concat(inner, "</footer>"); });
exports.header = comp(function (att, inner) { return "<header ".concat(att, ">").concat(inner, "</header>"); });
exports.h1 = comp(function (att, inner) { return "<h1 ".concat(att, ">").concat(inner, "</h1>"); });
exports.h2 = comp(function (att, inner) { return "<h2 ".concat(att, ">").concat(inner, "</h2>"); });
exports.h3 = comp(function (att, inner) { return "<h3 ".concat(att, ">").concat(inner, "</h3>"); });
exports.h4 = comp(function (att, inner) { return "<h4 ".concat(att, ">").concat(inner, "</h4>"); });
exports.h5 = comp(function (att, inner) { return "<h5 ".concat(att, ">").concat(inner, "</h5>"); });
exports.main = comp(function (att, inner) { return "<main ".concat(att, ">").concat(inner, "</main>"); });
exports.nav = comp(function (att, inner) { return "<nav ".concat(att, ">").concat(inner, "</nav>"); });
exports.section = comp(function (att, inner) {
    return "<section ".concat(att, ">").concat(inner, "</section>");
});
exports.blockquote = comp(function (att, inner) {
    return "<blockquote ".concat(att, ">").concat(inner, "</blockquote>");
});
exports.div = comp(function (att, inner) { return "<div ".concat(att, ">").concat(inner, "</div>"); });
exports.hr = comp(function (att, inner) { return "<hr ".concat(att, ">").concat(inner, "</hr>"); });
exports.li = comp(function (att, inner) { return "<li ".concat(att, ">").concat(inner, "</li>"); });
exports.ol = comp(function (att, inner) { return "<ol ".concat(att, ">").concat(inner, "</ol>"); });
exports.p = comp(function (att, inner) { return "<p ".concat(att, ">").concat(inner, "</p>"); });
exports.pre = comp(function (att, inner) { return "<pre ".concat(att, ">").concat(inner, "</pre>"); });
exports.ul = comp(function (att, inner) { return "<ul ".concat(att, ">").concat(inner, "</ul>"); });
exports.a = comp(function (att, inner) { return "<a ".concat(att, ">").concat(inner, "</a>"); });
exports.br = comp(function () { return "<br>"; });
exports.code = comp(function (att, inner) { return "<code ".concat(att, ">").concat(inner, "</code>"); });
exports.em = comp(function (att, inner) { return "<em ".concat(att, ">").concat(inner, "</em>"); });
exports.i = comp(function (att, inner) { return "<i ".concat(att, ">").concat(inner, "</i>"); });
exports.b = comp(function (att, inner) { return "<b ".concat(att, ">").concat(inner, "</b>"); });
exports.small = comp(function (att, inner) { return "<small ".concat(att, ">").concat(inner, "</small>"); });
exports.span = comp(function (att, inner) { return "<span ".concat(att, ">").concat(inner, "</span>"); });
exports.strong = comp(function (att, inner) { return "<strong ".concat(att, ">").concat(inner, "</strong>"); });
exports.sub = comp(function (att, inner) { return "<sub ".concat(att, ">").concat(inner, "</sub>"); });
exports.sup = comp(function (att, inner) { return "<sup ".concat(att, ">").concat(inner, "</sup>"); });
exports.time = comp(function (att, inner) { return "<time ".concat(att, ">").concat(inner, "</time>"); });
exports.area = comp(function (att, inner) { return "<area ".concat(att, ">").concat(inner, "</area>"); });
exports.audio = comp(function (att, inner) { return "<audio ".concat(att, ">").concat(inner, "</audio>"); });
exports.img = comp(function (att, inner) { return "<img ".concat(att, ">").concat(inner, "</img>"); });
exports.map = comp(function (att, inner) { return "<map ".concat(att, ">").concat(inner, "</map>"); });
exports.track = comp(function (att, inner) { return "<track ".concat(att, ">").concat(inner, "</track>"); });
exports.video = comp(function (att, inner) { return "<video ".concat(att, ">").concat(inner, "</video>"); });
exports.embed = comp(function (att, inner) { return "<embed ".concat(att, ">").concat(inner, "</embed>"); });
exports.iframe = comp(function (att, inner) { return "<iframe ".concat(att, ">").concat(inner, "</iframe>"); });
exports.noembed = comp(function (att, inner) {
    return "<noembed ".concat(att, ">").concat(inner, "</noembed>");
});
exports.object = comp(function (att, inner) { return "<object ".concat(att, ">").concat(inner, "</object>"); });
exports.picture = comp(function (att, inner) {
    return "<picture ".concat(att, ">").concat(inner, "</picture>");
});
exports.source = comp(function (att, inner) { return "<source ".concat(att, ">").concat(inner, "</source>"); });
exports.canvas = comp(function (att, inner) { return "<canvas ".concat(att, ">").concat(inner, "</canvas>"); });
exports.caption = comp(function (att, inner) {
    return "<caption ".concat(att, ">").concat(inner, "</caption>");
});
exports.col = comp(function (att, inner) { return "<col ".concat(att, ">").concat(inner, "</col>"); });
exports.colgroup = comp(function (att, inner) {
    return "<colgroup ".concat(att, ">").concat(inner, "</colgroup>");
});
exports.table = comp(function (att, inner) { return "<table ".concat(att, ">").concat(inner, "</table>"); });
exports.tbody = comp(function (att, inner) { return "<tbody ".concat(att, ">").concat(inner, "</tbody>"); });
exports.td = comp(function (att, inner) { return "<td ".concat(att, ">").concat(inner, "</td>"); });
exports.tfoot = comp(function (att, inner) { return "<tfoot ".concat(att, ">").concat(inner, "</tfoot>"); });
exports.th = comp(function (att, inner) { return "<th ".concat(att, ">").concat(inner, "</th>"); });
exports.thead = comp(function (att, inner) { return "<thead ".concat(att, ">").concat(inner, "</thead>"); });
exports.tr = comp(function (att, inner) { return "<tr ".concat(att, ">").concat(inner, "</tr>"); });
exports.button = comp(function (att, inner) { return "<button ".concat(att, ">").concat(inner, "</button>"); });
exports.datalist = comp(function (att, inner) {
    return "<datalist ".concat(att, ">").concat(inner, "</datalist>");
});
exports.fieldset = comp(function (att, inner) {
    return "<fieldset ".concat(att, ">").concat(inner, "</fieldset>");
});
exports.form = comp(function (att, inner) { return "<form ".concat(att, ">").concat(inner, "</form>"); });
exports.input = comp(function (att, inner) { return "<input ".concat(att, ">").concat(inner, "</input>"); });
exports.label = comp(function (att, inner) { return "<label ".concat(att, ">").concat(inner, "</label>"); });
exports.legend = comp(function (att, inner) { return "<legend ".concat(att, ">").concat(inner, "</legend>"); });
exports.meter = comp(function (att, inner) { return "<meter ".concat(att, ">").concat(inner, "</meter>"); });
exports.optgroup = comp(function (att, inner) {
    return "<optgroup ".concat(att, ">").concat(inner, "</optgroup>");
});
exports.option = comp(function (att, inner) { return "<option ".concat(att, ">").concat(inner, "</option>"); });
exports.select = comp(function (att, inner) { return "<select ".concat(att, ">").concat(inner, "</select>"); });
exports.textarea = comp(function (att, inner) {
    return "<textarea ".concat(att, ">").concat(inner, "</textarea>");
});
exports.details = comp(function (att, inner) {
    return "<details ".concat(att, ">").concat(inner, "</details>");
});
exports.summary = comp(function (att, inner) {
    return "<summary ".concat(att, ">").concat(inner, "</summary>");
});
// Utils parser
function genAtt(item) {
    return Object.keys(item)
        .map(function (k) {
        var value = escapeHtml(item[k]);
        var key = escapeHtml(k);
        return value ? "".concat(key, "=\"").concat(value, "\"") : "".concat(key);
    })
        .join(" ");
}
function comp(a) {
    return function (o, children) {
        var att = genAtt(o);
        var parse = typeof children === "string" ? children : children.join(" ");
        return a(att, parse);
    };
}
exports.comp = comp;
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
