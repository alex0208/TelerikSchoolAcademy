define(['kendo', 'viewsLoader', 'data'], function(kendo, loader, data) {

    function initView() {
        var viewHTML;
        return loader.loadView('add-image')
            .then(function(responseHTML) {

                viewHTML = responseHTML;

                var viewModel = kendo.observable({
                    title: "New Image view title",
                    newImage: {
                        title: '',
                        url: ''
                    },
                    addImage: function(e) {
                        e.preventDefault();

                        var title = viewModel.get('newImage.title'),
                            url = viewModel.get('newImage.url');

                        viewModel.set('newImage.title', '');
                        viewModel.set('newImage.url', '');

                        data.images.add({
                            title: title,
                            url: url
                        });

                        router.navigate('/images');
                    }
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