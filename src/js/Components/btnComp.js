import Component from './Component.js'

export default class BtnComp extends Component
{
    static component;

    static generateMarkup(data) {
        this.component = document.createElement('button');
        this.component.innerHTML = data.name;

        if(data.classList)
            this.classList(data.classList);

        return this.component;
    }
}