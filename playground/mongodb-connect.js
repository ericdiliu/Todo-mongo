// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if (err) {
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'some to do item',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to add to collection');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Eric',
        age: 30,
        location: 'Texas'
    }, (err, result) => {
        if (err) {
            return console.log('unable to add to collection');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});