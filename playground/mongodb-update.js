const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if (err) {
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(count);
    // },(err)=>{
    //     console.log('Error', err);
    // })

    db.collection('Todos').findOneAndUpdate({
        completed:false
    },{
        $set: {
            completed: true
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    // db.collection('Todos').

    client.close();
});
