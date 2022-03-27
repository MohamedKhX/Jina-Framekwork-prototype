import BtnComp from '../Components/btnComp.js';
import {addObject} from "../EventHandler.js";
import PostComponent from "../Components/postComponent.js";
import FormComp from "../Components/formComp.js";

export default class WelcomeView {

    renderView(data = {}) {

        const form = FormComp.render(document.body, {});

        this.handleEvents([
            {name: 'form', object: form}
        ])
    }

    renderPost(post) {
        PostComponent.render(document.body, {
            title: post.title,
            description: post.description
        })
    }

    renderPosts(posts) {

        posts = Object.values(posts);

        posts.forEach(function (post) {
            console.log(post)
            PostComponent.render(document.body, {
                title: post.title,
                description: post.description
            })
        })
    }

    handleEvents(objects = []) {
        objects.forEach(function (obj) {
            addObject(obj.name, obj.object);
        })
    }
}