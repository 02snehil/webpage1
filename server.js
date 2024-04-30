//Import important module
const express = require('express');
const webpageUser = require('./mongodb');
const coros = require('cors');

//creating express server
const server = express();

//setup Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(coros());


//Login
server.get("/login",coros(),(req,res)=>{

})

server.post("/login", async ( req, res )=> {
    const { email, password } = req.body;

    try{

          const check = await webpageUser.findOne({ email: email, password: password });
          if (check) {
            await webpageUser.updateOne({ email: email }, { $set: { loginTime: new Date() } });
            res.json("login successfull");
          }
          else {
            res.json("login fail");
          }
    }
    catch(e){
        res.json("login fail");
    }
});

//Logout
server.post("/logout", async (req,res) => {
    const { email } = req.body;

    try{
        await webpageUser.updateOne({ email: email }, { $set: { logoutTime: new Date() } });
        res.json("logout successfully");
    }
    catch (e) {
        res.json("logout fail");
    }
});



// Registration
server.post("/register", async (req, res) => {
const { phone, uname, email, password, r_password } = req.body;

const registrationDate = new Date(); // Generate current date and time

const userData = {
    phone: phone,
    uname: uname,
    email: email,
    password: password,
    r_password: r_password,
    registrationDate: registrationDate // Include registration date
};

try {
    const check = await webpageUser.findOne({ email: email, phone: phone });
    if (check) {
        res.json("The detail you have given that detail user is there");
    } else {
        const newUser = new webpageUser(userData);
        await newUser.save();
        res.json("good to go for registration");
    }
} 
catch (e) {
    res.json("Registration fail");
}
});

//  fetching all users data from the server
server.get("/users", async (req, res) => {
    try {
        const users = await webpageUser.find();
        res.json(users); // Send the users data as JSON response
    } 
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//starting the server
server.listen(8000,()=>{
    console.log("server is running on port number 8000");
})