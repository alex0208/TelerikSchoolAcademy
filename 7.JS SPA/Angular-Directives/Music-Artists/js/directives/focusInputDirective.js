'use strict';

musicApp.directive('focus', function() {

    function link(scope, element, attrs) {
        element.focus();
    }

    return {
        link: link
    }
});