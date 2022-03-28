import BtnComp from '../Components/btnComp.js';
import {addObject} from "../EventHandler.js";
import PostComponent from "../Components/postComponent.js";
import FormComp from "../Components/formComp.js";

export default class WelcomeView {

    postContainer;

    renderView(data = {}) {
        const form = FormComp.render(document.body);

        this.postContainer = document.createElement('div');
        document.body.append(this.postContainer)
        this.postContainer.classList.add('posts');

        const clearTableBtn = BtnComp.render(document.body, {
            name: 'clear Posts'
        });

        this.handleEvents([
            {name: 'form', object: form},
            {name: 'clearTableBtn', object: clearTableBtn},
            {name: 'deleteSinglePost', object: this.postContainer}
        ])
    }

    renderPost(post, id) {
        PostComponent.render(this.postContainer, {
            id,
            title: post.title,
            description: post.description,
            classList: ['post']
        })
    }

    renderPosts(posts) {

        const ids = Object.keys(posts);

        posts = Object.values(posts);
        const postContainer = this.postContainer

        posts.forEach(function (post, index, array) {
            PostComponent.render(postContainer, {
                id: ids[index + 1],
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

    unRenderPost(id) {
        const post = document.querySelector(`button[data-id='${id}']`).closest('.post');
        post.remove();
    }

    handleEvents(objects = []) {
        objects.forEach(function (obj) {
            addObject(obj.name, obj.object);
        })
    }
}