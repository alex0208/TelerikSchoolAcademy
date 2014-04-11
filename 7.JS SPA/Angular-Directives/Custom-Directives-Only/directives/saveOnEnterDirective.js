'use strict';

musicApp.directive('saveOnEnter', function() {

    function link(scope, element, attrs) {

        document.addEventListener('keypress', function(e) {
            if (e.keyCode === 13) {
                //Enter key has been pressed
                e.preventDefault();
                element.click();
            }
        }, false);
    }

    return {
        link: link
    }
});