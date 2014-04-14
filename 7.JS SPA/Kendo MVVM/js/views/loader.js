define(['rsvp'], function() {

    function loadView(name) {

        var promise = new RSVP.Promise(function(resolve, reject) {

            $.ajax({
                url: 'js/views/' + name + '/' + name + '.html',
                success: function(html) {
                    resolve(html);
                },
                error: function(err) {
                    reject(err);
                }
            });
        });

        return promise;
    }

    return {
        loadView: loadView
    }
});