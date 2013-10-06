/*global require*/
(function () {
    'use strict';

    var componentsDir = '../bower_components/';

    require.config({
        paths: {
            mustache: componentsDir + 'mustache/mustache',
            jquery: componentsDir + 'jquery/jquery.min',
            mathjax: componentsDir + 'mathjax-lazyload/dist/mathjax-lazyload.min',
            text: componentsDir + 'requirejs-text/text'
        }
    });

    require([
    	'./app'
    	], function(app) {
	});
}());
