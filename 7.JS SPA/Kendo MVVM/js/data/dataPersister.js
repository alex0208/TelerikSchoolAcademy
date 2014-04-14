define(['storage', 'underscore'], function(storage) {
    'use strict';

    var currentUser = null;

    function getImages() {
        return JSON.parse(storage.getItem('Images' + currentUser.password));
    }

    function getImageById(id) {
        return _.findWhere(JSON.parse(storage.getItem('Images' + currentUser.password)), {
            id: id
        });
    }

    function addImage(image) {
        var images = JSON.parse(storage.getItem('Images' + currentUser.password)) || [];
        images.push(image);
        storage.setItem('Images' + currentUser.password, JSON.stringify(images));
    }

    function getUser(user) {
        if (currentUser)
            return currentUser;
        if (user) {
            var userString = storage.getItem('User' + user.password);
            currentUser = JSON.parse(userString);
            return currentUser;
        }
        return null;
    }

    function logoutUser() {
        currentUser = null;
    }

    function createUser(user) {
        currentUser = JSON.stringify(user);
        storage.setItem('User' + user.password, currentUser);
        return currentUser;
    }

    return {
        images: {
            get: getImages,
            getById: getImageById,
            add: addImage
        },
        user: {
            get: getUser,
            create: createUser,
            logout: logoutUser
        }
    }

});