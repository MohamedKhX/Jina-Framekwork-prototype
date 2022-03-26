import Database from "./Database.js";

export const database = new Database();



//Migrations


function CreatePostsTable() {
    database.createNewTable('posts');
    database.createNewField('posts', 'title', 'string');
    database.createNewField('posts', 'description', 'text');
}


function runMigrations() {
    CreatePostsTable();
}

runMigrations();