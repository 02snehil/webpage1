

const { mongoose } = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/snehildb")
    .then(() =>{
         console.log("mongodb connected");     
    })
    .catch((err) =>{
        console.log("mongodb failed to connect:", err);
    });


    const newSchema = new mongoose.Schema({
        uname: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        phone: {
            type: Number
            
        },
        password: {
            type: String,
           
        },
        r_Password: {
            type: String
            
        },
        provider: {
            type: String,
            required: true,
        },
        registrationTime: {
            type: Date,
            default: Date.now
        },
        loginTime: {
            type: Date,
            default: null
        },
        logoutTime: {
            type: Date,
            default: null
        }  
    });

const webpageUser = mongoose.model("webpageUser", newSchema);
module.exports = webpageUser;
