import Router from "./Router.js";
import HomeController from "./Controllers/HomeController.js";
import View from './View.js'
import welcomeView from './Views/welcomeView.js'

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


Router.register('', function () {
    View.render(welcomeView);
})

Router.register(HomeController, function (controller) {
    getObject('btn').addEventListener('click', function () {
        controller.home();
    })
})


