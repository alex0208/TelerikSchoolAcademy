'use strict';

musicApp.directive('albumThumbnail', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/album-thumbnail-directive.html',
        scope: {
            album: '='
        }
    }
});