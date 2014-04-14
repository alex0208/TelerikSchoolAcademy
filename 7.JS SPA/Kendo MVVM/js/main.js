require.config({
    paths: {
        kendo: 'lib/kendo/js/kendo.web.min',
        data: 'data/dataPersister',
        storage: 'data/storage',
        underscore: 'lib/underscore/underscore',
        rsvp: 'lib/rsvp/rsvp',
        viewsLoader: 'views/loader',
    }
});

require(['kendo', 'data', 'views/views', 'views/layout/layout'], function(kendo, data, views, layout) {
    'use strict';

    var router = new kendo.Router();

    var appLayout;

    layout.init()
        .then(function(layout) {
            appLayout = layout;
            appLayout.render('#root');
        }),


    router.route('/', function() {
        // Display home view
        views.home.init()
            .then(function(view) {
                appLayout.showIn('#page', view);
            });
    });

    router.route('/register', function() {
        // Display register view
        views.register.init()
            .then(function(view) {
                appLayout.showIn('#page', view);
            });
    });

    router.route('/images', function() {
        // Display images view
        views.images.init()
            .then(function(view) {
                appLayout.showIn('#page', view);
            });
    });

    router.route('/add-image', function() {
        // Display images view
        views.addImage.init()
            .then(function(view) {
                appLayout.showIn('#page', view);
            });
    });

    router.route('/images/:id', function(id) {
        // Display single image view
        views.image.init(id)
            .then(function(view) {
                appLayout.showIn('#page', view);
            });
    });

    $(function() {
        router.start();
        window.router = router;
    });
});