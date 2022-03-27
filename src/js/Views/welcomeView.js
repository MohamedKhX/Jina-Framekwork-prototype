import BtnComp from '../Components/btnComp.js';
import {addObject} from "../EventHandler.js";
import PostComponent from "../Components/postComponent.js";
import FormComp from "../Components/formComp.js";

export default class WelcomeView {

    renderView(data = {}) {

        const form = FormComp.render(document.body);

        const clearTableBtn = BtnComp.render(document.body, {
            name: 'clear Posts'
        });

        this.handleEvents([
            {name: 'form', object: form},
            {name: 'clearTableBtn', object: clearTableBtn}
        ])
    }

    renderPost(post) {
        PostComponent.render(document.body, {
            title: post.title,
            description: post.description,
            classList: ['post']
        })
    }

    renderPosts(posts) {

        posts = Object.values(posts);

        posts.forEach(function (post) {
            console.log(post)
            PostComponent.render(document.body, {
                title: post.title,
                description: post.description,
                classList: ['post']
            })
        })
    }

    unRenderPosts() {
        const posts = document.querySelectorAll('.post');
        for (const post of posts) {
            post.remove();
        }
    }

    handleEvents(objects = []) {
        objects.forEach(function (obj) {
            addObject(obj.name, obj.object);
        })
    }
}