const { _getDb } = require("./_getDb")
// function setFav(mobilParam,favParam) {
//      _getDb()
//     .then((db) => {
//         console.log(!favParam)
         
//         .updateOne({"mobil":mobilParam},{$set:{"isFav":!favParam}}) 
//         .finally(
//             _getDb()
//             .then(db => {
//                 return db.collection('Contacts').find({"mobil":mobilParam}).toArray()})
//                 .then(x =>{console.log(x)})
            
//         )
//     })
// }
async function setFav(mobilParam,favParam) {
    const db = await _getDb()
    db.collection('Contacts').updateOne({"mobil":mobilParam},{$set:{"isFav":!favParam}})
    // const update =   console.log(db)
}

module.exports = {setFav}


// db.Contacts.find({"mobil":"4915737245929"}).toArray()
// db.Contacts.updateOne({"mobil":"+4915737245929"},{$set:{"isFav":false}}) 