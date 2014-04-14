define(['kendo', 'viewsLoader'], function(kendo, loader) {

    function initView() {
        return loader.loadView('home')
            .then(function(viewHTML) {
                    var viewModel = kendo.observable({
                        title: "Home view title"
                    }),
                        view = new kendo.View(viewHTML, {
                            model: viewModel
                        });

                    return view;
                },
                function(err) {
                    console.error(err);
                });
    }

    return {
        init: initView
    }

});