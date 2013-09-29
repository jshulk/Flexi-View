require.config({

	baseUrl: 'js',

	shim:{
		'underscore' : {
			exports: '_'
		},
		backbone: {
			deps: ['jquery', 'underscore'],
			exports : "Backbone"
		}
	},
	paths: {
		'jquery' : 'libs/jquery.min',
		'underscore' : 'libs/underscore-min',
		'backbone' : 'libs/backbone-min',
		'tpl' : 'libs/tpl'
	}

});

require(["app"], function(App){
	App.initialize();
});