import {database} from "../migrations.js";
export default class PostModel
{
    //first but all properties that you want to handle
    title;
    description;

    constructor(title, description) {
        this.title = title;
        this.description = description;
    }


    validateData() {
        //just validate the data as you want before they go to the database
        //use the old validator
        return true;
    }


    save() {
/*
        if(!this.validateData()) return;
*/
        this.postData()
    }

    postData() {
        database.insert('posts', {
            title: this.title,
            description: this.description
        })
    }

    getData() {
       //you need to create more methods
       //one for get single post
       //second get more then post
        console.log(database.data)
    }
}