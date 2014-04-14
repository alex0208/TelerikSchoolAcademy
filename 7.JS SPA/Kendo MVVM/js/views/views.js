define(['views/home/home', 'views/images/images', 'views/image/image', 'views/register/register', 'views/add-image/add-image'], function(home, images, image, register, addImage) {

    return {
        home: home,
        images: images,
        image: image,
        register: register,
        addImage: addImage
    }
});