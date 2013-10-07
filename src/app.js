/*global define, document, MathJax*/
define([
    'mustache',
    'text!problems.json',
    'text!index.tmpl',
    'jquery'], function (mustache, data, Template, $) {
    "use strict";

    var html;

    html = mustache.to_html(Template, JSON.parse(data));

    $(document).ready(function () {
        $('#problems').html(html);
        MathJax.Hub.Configured();
    });
});
