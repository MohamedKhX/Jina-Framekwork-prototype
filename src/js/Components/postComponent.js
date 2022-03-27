import Component from './Component.js'

export default class PostComponent extends Component
{
    static component;

    static generateMarkup(data) {
        this.component = document.createElement('div');
        this.component.innerHTML = this.generateTemplete(data);

        if(data.classList)
            this.classList(data.classList);

        return this.component;
    }

    static generateTemplete(data) {
        return `
            <h1>${data.title}</h1>
            <p>${data.description}</p>
        `
    }

}