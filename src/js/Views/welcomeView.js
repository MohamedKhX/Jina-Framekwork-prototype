import BtnComp from '../Components/btnComp.js';
import {addObject} from "../EventHandler.js";

export default class WelcomeView {

    renderView(data = {}) {

        const btn = BtnComp.render(document.body, {
            name: data.name,
            classList: ['btn', 'btn-green']
        });

        const viewBtn = BtnComp.render(document.body, {
            name: 'Click to view the posts'
        })

       this.handleEvents([
           {name: 'btn', object: btn},
           {name: 'viewBtn', object: viewBtn}
       ])
    }

    handleEvents(objects = []) {
        objects.forEach(function (obj) {
            addObject(obj.name, obj.object);
        })
    }
}