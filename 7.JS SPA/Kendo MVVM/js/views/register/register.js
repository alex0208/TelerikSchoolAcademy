define(['kendo', 'viewsLoader', 'data'], function(kendo, loader, data) {

    function initView() {
        var viewHTML;
        return loader.loadView('register')
            .then(function(responseHTML) {

                viewHTML = responseHTML;

                var viewModel = kendo.observable({
                    user: {
                        name: '',
                        password: ''
                    },
                    register: function(e) {
                        e.preventDefault();

                        var name = this.get('user.name'),
                            password = viewModel.get('user.password');

                        viewModel.set('user.name', '');
                        viewModel.set('user.password', '');

                        viewModel.set('user', data.user.create({
                            name: name,
                            password: password
                        }));

                        router.navigate('/');
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