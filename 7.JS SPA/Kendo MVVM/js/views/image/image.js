define(['kendo', 'viewsLoader', 'data'], function(kendo, loader, data) {

    function initView(imageId) {
        var viewHTML;
        return loader.loadView('image')
            .then(function(responseHTML) {

                viewHTML = responseHTML;

                return data.images.getById(imageId);
            })
            .then(function(image) {
                var viewModel = kendo.observable({
                    title: "Image view title",
                    image: image
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