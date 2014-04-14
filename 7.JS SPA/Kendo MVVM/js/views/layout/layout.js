define(['kendo', 'viewsLoader', 'data'], function(kendo, loader, data) {

    function initView(imageId) {
        var layoutHTML;
        return loader.loadView('layout')
            .then(function(responseHTML) {

                layoutHTML = responseHTML;

                return data.user.get();
            })
            .then(function(user) {
                var viewModel = kendo.observable({
                    user: user,
                    loginInfo: {
                        name: '',
                        password: ''
                    },

                    login: function(e) {
                        e.preventDefault();

                        var name = this.get('loginInfo.name'),
                            password = viewModel.get('loginInfo.password');

                        viewModel.set('loginInfo.name', '');
                        viewModel.set('loginInfo.password', '');

                        viewModel.set('user', data.user.get({
                            name: name,
                            password: password
                        }));

                        router.navigate('/images');
                    },
                    logout: function(e) {
                        e.preventDefault();

                        data.user.logout();
                        viewModel.set('user', null);

                        router.navigate('/');
                    }
                    //greeting: "Hello, " + user.name
                }),
                    layout = new kendo.Layout(layoutHTML, {
                        model: viewModel
                    });

                return layout;
            });
    }

    return {
        init: initView
    }

});