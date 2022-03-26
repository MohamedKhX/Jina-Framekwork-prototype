export default class View
{
    static render(view, data = {}) {
        view = new view();
        view.renderView(data);
    }
}