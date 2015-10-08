/**
 * Created by tony on 10/7/15.
 */
//Setting up route
angular.module('search').config(['$stateProvider',
    function($stateProvider){
        $stateProvider.
            state('searchPost',{
                url:'/posts/:keyword',
                templateUrl: 'modules/search/views/search-post.client.view.html'
            });
    }
    ]);