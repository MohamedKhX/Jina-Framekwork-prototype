import {database} from "../migrations.js";
export default class PostModel
{
    //properties
    title;
    description;


    tableName = 'posts';

    constructor(title = '', description = '') {
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
        })
    }

    getData() {
        if(!database.data[this.tableName]) return {}

        return database.data[this.tableName];
    }

    clearPostsTable() {
        database._clearTable(this.tableName);
    }
}