import Component from './Component.js'

export default class FormComp extends Component
{
    static component;

    static generateMarkup(data) {
        this.component = document.createElement('form');
        this.component.innerHTML = this.generateTemplate(data);

        if(data.classList)
            this.classList(data.classList);

        return this.component;
    }

    static generateTemplate(data) {
        return `
            <input type="text" placeholder="title">
            <input type="text" placeholder="description">
            <input type="submit" value="submit">
        `
    }

}