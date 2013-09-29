define([
		"backbone",
		"utils/FilterController"
		], function(Backbone, filterController ){

	var baseView = Backbone.View.extend({}),
		vents = _.extend( {}, Backbone.Events );

	_.extend( baseView.prototype, {
		eventBus : vents,
		initialize: function( options ){
			this.addGlobalEvents( options.globalEvents );
			this.initializeSubViews( options.subViews, options );
		},
		initializeSubViews: function( subviews, options ){
			for(var i in subviews ){
				this.instantiateSubView( subviews[i], options );

			}
		},
		instantiateSubView: function( view, options ){
			this[view.name] = new view.value( options.params );
		},
		addGlobalEvents: function(events){
			_.each( events, function(event){
				
				//this.addCallback( event );
				this.addEvent( event );
			
			}, this);
		},
		addEvent: function(e){
			this.eventBus.on( e.name, this[e.callback], this);
		},
		addCallback: function(e){
			this[e.callback] = filterController[e.callback];
		}
	});

	return baseView;
});