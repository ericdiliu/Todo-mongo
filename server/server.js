var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodosApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var User = mongoose.model('User', {
    username: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true
    }
});

// var newTodo = new Todo({
//     text: 'something else 2'
// });
//
// newTodo.save().then((doc)=>{
//     console.log(doc);
// },(err)=>{
//     console.log(err);
// });

var newUser = new User({
    username: "ediliu",
    name: "Eric",
    email: "ediliu@123.com",
    password: "12345678"
})

newUser.save().then((doc)=>{
    console.log(doc);
},(err)=>{
    console.log(err);
});