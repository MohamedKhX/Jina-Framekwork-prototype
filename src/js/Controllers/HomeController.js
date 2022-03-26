import View from "../View.js";
import welcomeView from "../Views/welcomeView.js";
import PostModel from "../Models/PostModel.js"
export default class HomeController
{
    index() {
        alert('Index method')
    }

    home() {
        View.render(welcomeView, {name: 'Click me please'});
    }

    createPost() {
        const post = new PostModel('How to do', 'there is a lot of things in the world');
        post.save();
    }

    showResults() {
        const post = new PostModel();
        post.getData();
    }
}