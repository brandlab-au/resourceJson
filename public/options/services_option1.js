'use strict';

angular.module('confusionApp')
		  .constant("baseURL","http://lovlalwani.com:3000/")
         
		  .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
			
			//var menufac = {};
			this.getDishes = function(){
                         return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});

             };
						
			//var promotions = {};
			this.getPromotions = function(index){
                         return $resource(baseURL+"promotions/0",null,  {'update':{method:'PUT' }});

                  

                };			
             
				

        }])
		
		  .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
			
            var corpfac = {};
    
            corpfac.getLeaders = function(){
                         return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});

             };
     
           
			return corpfac;
    
        }])
		
		.service('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {

          this.getFeedbacks = function(){
            return $resource(baseURL+"feedback/:id",null,  {'create':{method:'POST' }});
          }

        }]);

;



    