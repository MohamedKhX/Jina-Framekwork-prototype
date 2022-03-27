export default class Database
{

    dataTypes = ['string', 'int', 'text', 'date']

    tables = {};

    data = {};

    constructor() {
        this._getDataLocally();
    }

    createNewField(table ,field, dataType) {
        if(!this._checkIfTableFound(table)) throw new Error(`Table ${table} is not found in database`);
        if(!this._checkIfDataTypeFound(dataType)) throw new Error(`database Cant handle this dataType {${dataType}}`)

        this.tables[table][field] = dataType;
    }

    createNewTable(table) {
        this.tables[table] = {};
    }


    insert(table , data = {}) {
        this._checkIfTableFoundInData(table);

        const newData = this.data[table][this._generateId('posts')] = { };
        const fields = this._getTableFields(table);

        for (const field of fields) {
            newData[field] = data[field];
        }

        this._saveDataLocally();
        return newData;
    }

    _saveDataLocally() {
        const data = JSON.stringify(this.data)
        localStorage.setItem('data', data);
    }


    _getDataLocally() {
        const data = localStorage.getItem('data');

        if(!data) return

        this.data = JSON.parse(data);

    }

    _insertDataTable(table) {
        this.data[table] = {}
    }

    _checkIfTableFoundInData(table) {
        if(!this.tables[table]) throw new Error(`Table not found ${table}`)

        if(!this.data[table])
           return this._insertDataTable(table);
    }

    _checkIfTableFound(table) {
        return this.tables[table];
    }

    _checkIfDataTypeFound(dataType) {
        return Boolean(this.dataTypes.find(type => type === dataType));
    }


    _generateId(table) {
        const ids = [];

        for (const [id] of Object.entries(this.data[table])) {
            ids.push(id)
        }

        if(ids.length === 0) return 1;

        return Math.max(...ids) + 1;
    }

    _getTableFields(table) {
        const fields = [];
        for (const [field, _] of Object.entries(this.tables[table])) {
            fields.push(field)
        }
        return fields;
    }

    _deleteItem(item) {

    }

    _clearTable(table) {
        this.data['posts'] = undefined;
        this._saveDataLocally();
    }

    _clearDatabase() {
        localStorage.clear();
    }
}