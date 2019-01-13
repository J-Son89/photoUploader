const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
var cors             = require('cors');
const app = express();
const dbName = db.dbName
const port = db.port;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
MongoClient.connect(db.url,{ useNewUrlParser: true } , (err,database)=> {
    if(err) return console.log(err)
    const customerId = '666'
    require('./app/routes')(app, database.db(dbName))
    app.listen(port,() => {
        console.log('We are live on ' + port)
    })
})
