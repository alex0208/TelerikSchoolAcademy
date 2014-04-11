'use strict';

musicApp.directive('datePicker', function() {

    function link(scope, element, attrs) {
        element.datepicker({
            inline: true,
            showOtherMonths: true,
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        });
    }

    return {
        link: link
    }
});