import View from "../View.js";
import welcomeView from "../Views/welcomeView.js";
import PostModel from "../Models/PostModel.js"
export default class HomeController
{

    view;

    home() {
       this.view = View.render(welcomeView);
       this.renderPosts();
    }

    createPost(data) {
        const post = new PostModel(data.title, data.description);
        post.save();
        this.view.renderPost(post);
    }

    renderPosts() {
        const post = new PostModel();
        this.view.renderPosts(post.getData());
    }
}