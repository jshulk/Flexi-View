define([
		"backbone",
		"views/FundsView",
		"views/WatchedFundsView"
		], 
		function(
				 Backbone,
				 FundsView,
				 WatchedFundsView
				){
	
	return {
		
			initialize: function(){
				console.log('app initialized');
				var fundViewOptions = _.extend({}, 
											 FundsView.getEvents()
											)
			}
			
	}
});