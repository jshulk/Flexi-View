define([
		"backbone",
		"views/FundsView",
		"views/WatchedFundsView",
		"views/BaseView"
		], 
		function(
				 Backbone,
				 FundsView,
				 WatchedFundsView,
				 BaseView
				){
	
	return {
		
			initialize: function(){
				console.log('app initialized');

				this.fundsView = new FundsView({
					el : "#funds",
					globalEvents: FundsView.getGlobalEvents(),
					subViews: FundsView.getSubViews(),
					params : {},
					events : {
						"click #test-trigger " : "performSearch"
					}
				});

				this.wfundsView = new WatchedFundsView({
					el : "#watchedFunds",
					globalEvents: WatchedFundsView.getGlobalEvents(),
					subViews : WatchedFundsView.getSubViews(),
					params : {},
					events : {
						"click #test-trigger " : "performSearch"
					}
				});

				console.log( 'fundsView')
				console.log(this.fundsView);
				console.log(this.wfundsView);

				setTimeout( function(){
					BaseView.prototype.eventBus.trigger("initial:load");
				}, 2000)
			}
	};
});