const { mongoose } = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/snehildb")
    .then(() =>{
         console.log("mongodb connected");     
    })
    .catch((err) =>{
        console.log("mongodb failed to connect:", err);
    });


const newSchema = new mongoose.Schema({
    phone: {
        type: Number,
        require: true,
        minlenght:10,
        maxlenght:10
    },
    uname: {
        type: String,
        require: true,
        minlenght: 3,
        maxlenght: 20
    },
    email: {
        type:String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlenght: 3,
        maxlenght:15
    },
    r_password:{
        type: String,
        require: true,
        minlenght: 3,
        maxlenght:15
    },
    loginTime: {
        type: Date,
        default: null
    },
    logoutTime: {
        type: Date,
        default: null
    },
    registrationDate: {
        type: Date,
        default: Date.now 
    }
});

const webpageUser = mongoose.model("webpageUser", newSchema);
module.exports = webpageUser;
