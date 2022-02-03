const { _getDb } = require("./_getDb")

async function addNew(mobilParam,favParam,bildParam , nameParam) {
    const db = await _getDb()
    return db.collection('Contacts').insertOne({"mobil":mobilParam ,"isFav":favParam , "bild" : bildParam , "name": nameParam})
}

module.exports = {addNew}


// db.Contacts.find({"mobil":"4915737245929"}).toArray()
// db.Contacts.updateOne({"mobil":"+4915737245929"},{$set:{"isFav":false}}) 