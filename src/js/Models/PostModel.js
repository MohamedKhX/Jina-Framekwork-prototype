import {database} from "../migrations.js";
import {BaseModel} from "../BaseModel.js";
export default class PostModel extends BaseModel
{
    //properties
    title;
    description;


    tableName = 'posts';

    constructor(title = '', description = '') {
        super();
        this.title = title;
        this.description = description;
    }


    validateData() {}

    save() {
        this.postData()
    }

    postData() {
        database.insert(this.tableName, {
            title: this.title,
            description: this.description
        });
        this.id = database.getLastId();
    }

    getData() {
        if(!database.data[this.tableName]) return {}
        return database.data[this.tableName];
    }

    clearPostsTable() {
        database._clearTable(this.tableName);
    }


    deleteItem(id) {
        database._deleteItem(this.tableName, id);
    }
}