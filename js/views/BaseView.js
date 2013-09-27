define([
		"backbone",
		"utils/FilterController"
		], function(Backbone, filterController ){

	var baseView = Backbone.View.extend({}),
		vents = _.extend( {}, Backbone.Events );
	_.extend( baseView.prototype, {
		eventBus : vents,
		initialize: function( options ){
			this.addGlobalEvents( options.events );
			this.initializeSubViews( options.subviews );
		},
		initializeSubViews: function( subviews ){
			for(var i in subviews ){
				this.instantiateSubView( subviews[i] );

			}
		},
		instantiateSubView: function( view ){
			this[view.name] = new view.value( view.params );
		},
		addGlobalEvents: function(events){
			_.each( events, function(event){
				
				this.addCallback( event );
				this.addEvent( event );
			
			}, this);
		},
		addCallback: function(e){
			this[e.callback] = filterController[e.callback];
		}
	});

	return baseView;
});