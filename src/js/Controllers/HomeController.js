import View from "../View.js";
import welcomeView from "../Views/welcomeView.js";
import PostModel from "../Models/PostModel.js"
import {database} from "../migrations.js";
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
        this.view.renderPost(post, post.id);
    }

    renderPosts() {
        const post = new PostModel();
        this.view.renderPosts(post.getData());
    }

   clearPosts() {
        this.view.unRenderPosts();
        new PostModel().clearPostsTable();
   }

   deletePost(id) {
        this.view.unRenderPost(id);
        new PostModel().deleteItem(id);
   }
}