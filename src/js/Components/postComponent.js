import Component from './Component.js'

export default class PostComponent extends Component
{
    static component;

    static generateMarkup(data) {
        this.component = document.createElement('div');
        this.component.innerHTML = this.generateTemplate(data);

        if(data.classList)
            this.classList(data.classList);

        return this.component;
    }

    static generateTemplate(data) {
        return `
            <h1>${data.title}</h1>
            <p>${data.description}</p>
            <button class="btn" data-id="${data.id}">Delete</button>
        `
    }

}