export default class Component
{
    static render(parent, data = {}) {
        this.generateMarkup(data);
        return parent.appendChild(this.component);
    }

    static classList(classes) {
        for (const classItem of classes) {
            this.addClass(classItem)
        }
    }

    static addClass(classItem) {
        this.component.classList.add(classItem);
    }
}