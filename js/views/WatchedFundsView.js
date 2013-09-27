define(["views/BaseView"], function(BaseView){
	var view =  BaseView.extend({
		
		performSearch: function(e){
			console.log('watched perform search');
		}
	});

	view.getEvents = function(){
				return {
					events: {
						"click #search " : "performSearch"	
					}
				}; 
					
				
			};
});	