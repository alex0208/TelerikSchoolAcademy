define(['kendo', 'viewsLoader', 'data'], function(kendo, loader, data) {

    function initView() {
        var viewHTML;
        return loader.loadView('images')
            .then(function(responseHTML) {

                viewHTML = responseHTML;

                return data.images.get();
            })
            .then(function(images) {
                var viewModel = kendo.observable({
                    title: "Image view title",
                    images: images
                }),
                    view = new kendo.View(viewHTML, {
                        model: viewModel
                    });

                return view;
            });
    }

    return {
        init: initView
    }

});