const { _getDb } = require("./_getDb")
function getAllContacts() {
    return _getDb()
    .then((db) => {
        return db.collection('Contacts')
        .find() // no find query because want all
        .toArray() // turn FindCursor into array to get data
    })
}
module.exports = {getAllContacts}