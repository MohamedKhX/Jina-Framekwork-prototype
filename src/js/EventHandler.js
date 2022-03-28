import Router from "./Router.js";
import HomeController from "./Controllers/HomeController.js";
import View from './View.js'
import welcomeView from './Views/welcomeView.js'
import Config from "./Config.js";

const objects = [
    {name: 'TR', object: {}}
];

// todo : Handle error if the name found in objects
export function addObject(name, object) {
    objects.push({name, object});
}

function getObject(name) {
    return objects.find(obj => obj.name === name).object;
}



Router.register(HomeController, function (controller) {
    controller.home();

    getObject('form').addEventListener('submit', function(e) {
        e.preventDefault();
        controller.createPost({
            title: getObject('form')[0].value,
            description: getObject('form')[1].value
        })
    });

    getObject('clearTableBtn').addEventListener('click', function () {
        controller.clearPosts();
    })

    getObject('deleteSinglePost').addEventListener('click', function(e) {
        if(e.target.dataset.id)
            controller.deletePost(e.target.dataset.id)
    })
})




