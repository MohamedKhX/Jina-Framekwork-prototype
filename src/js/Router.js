export default class Router
{
    static register(controller, callback, options = {}) {
        if(controller)
            this.withController(controller, callback)
        else
            this.withOutController(callback)
    }

    static withController(controller, callback) {
        controller = new controller();
        callback.call(this, controller);
    }

    static withOutController(callback) {
        callback()
    }
}



