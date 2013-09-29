define([
		"views/BaseView", 
		"views/WFiltersView"
		], 
		function(
					BaseView, 
					WFiltersView
				){
	var view =  BaseView.extend({
		
		performSearch: function(e){
			console.log('watched perform search');
		},
		fundsLoaded: function(){
			console.log('watched funds loaded');
		}
	});

	view.getGlobalEvents =  function(){
		return [{
			name : "initial:load",
			callback : "fundsLoaded"
		}];
	};
	view.getSubViews = function(){
		return [{
			name: "filtersView",
			value : WFiltersView
		}];
	};

	
	return view;
});	