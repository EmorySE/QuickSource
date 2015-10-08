/**
 * Created by tony on 10/7/15.
 */
'use strict';

//Search service
angular.module('search').factory('search', ['$resource',
    function($resource) {
        return $resource('search/:keyword', {}, {
            update: {
                method: 'PUT'
            }
        });
    }
]);