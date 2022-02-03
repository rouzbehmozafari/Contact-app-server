const { MongoClient } = require("mongodb")
const env = require('dotenv').config() 

let _db; // Design Pattern = Singleton

function _getDb() {   // "resolve",   "reject"
    return new Promise((resolveDB, rejectWithErr) => {
        if(_db) {
            resolveDB(_db);
        } else {
            const url = process.env.DB_URL;
            const client = new MongoClient(url)
    
            client
            .connect()
            .then((connected_client) => {
                _db = connected_client.db('Contacts');
                resolveDB(_db)
            })
            .catch((err) => rejectWithErr(err))
        }
    })
}

module.exports = { _getDb }