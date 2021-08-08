const mongoCleint = require('mongodb').MongoClient
const state = {
    db: null
}

module.exports.connection  = function(done){
    const url = 'mongodb://localhost:27017'
    const dbname = 'shopping'
mongoCleint.connect(url,(err,data)=>{
    if (err) return done(err)
    else  state.db = data.db(dbname)
    done()
})
}

module.exports.get = function(){
    return state.db
}