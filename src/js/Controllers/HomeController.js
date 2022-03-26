import View from "../View.js";
import welcomeView from "../Views/welcomeView.js";

export default class HomeController
{
    index() {
        alert('Index method')
    }

    home() {
        View.render(welcomeView, {name: 'Click me please'});
    }
}