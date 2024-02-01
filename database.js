mongoose  = require("mongoose");

mongoose.connect('mongodb://localhost:27017/adit').then(()=>{
//mongoose.connect('mongodb+srv://anjali:<Anjali@123>@cluster0.q1z9nqw.mongodb.net/').then(()=>{
    console.log("Connected successfully")
}).catch((error)=>{console.log(error)})

schema = mongoose.Schema({
    name : String,
    mail : String,
    age : Number
})

StudentModel = mongoose.model('student',schema)
console.log('model created')

module.exports =StudentModel