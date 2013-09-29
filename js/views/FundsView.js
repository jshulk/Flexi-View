define([
		"views/BaseView",
		"views/FiltersView"
		], 
		function(
				 BaseView, 
				 FiltersView
				){
	var view =  BaseView.extend({
		
		performSearch: function(e){
			console.log('performed search');
		},
		fundsLoaded: function(){
			console.log(" funds loaded ");
		}
	});

	view.getGlobalEvents = function(){
		return [{
			name : "initial:load",
			callback : "fundsLoaded"
		}];
	};
	view.getSubViews = function(){
		return [{
			name: "filtersView",
			value : FiltersView
		}];
	};

	/*_.extend(view, {

		
	});*/
	
	return view;
});	