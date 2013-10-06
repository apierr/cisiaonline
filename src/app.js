/*global define*/
define([
    'mustache',
    'text!problems.json',
    'jquery'
    ], function (mustache, data, $) {
    "use strict";
    var tpl = "<ol>{{#problems}}" + 
		  "<li><h3>Problem:</h3>{{{problem}}}<h3>Solution:</h3>{{{solution}}}</li>" +
          "{{/problems}}</ol>";
	var html = mustache.to_html(tpl, JSON.parse(data));
	$( document ).ready(function() {
		$('#problems').html(html);
        MathJax.Hub.Configured();
	});
});