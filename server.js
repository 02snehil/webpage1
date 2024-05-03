//server.js


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





// Registration Route
server.post("/register", async (req, res) => {
    const { uname, phone, email, password, r_password, provider } = req.body;

    try {
        // Check if the email already exists in the database
        const existingUser = await webpageUser.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user
        const newUser = new webpageUser({
                uname: provider === 'google' ? undefined : uname,
                phone: provider === 'google' ? undefined : phone,
                email,
                password: provider === 'google' ? undefined : password,
                r_Password: provider === 'google' ? undefined : r_password,
                provider,
                registrationTime: new Date()
        });

        // Save the user to the database
        await newUser.save();
        res.json({ message: "Registration Successful", user: newUser });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});



//Login 
server.get("/login",coros(),(req,res)=>{

})

server.post("/login", async ( req, res )=> {
    const { email, password } = req.body;

    try{
          
          ////checking if the user existing and password matches, update loginTime in the database
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

        // Update logoutTime when user logs out
        await webpageUser.updateOne({ email: email }, { $set: { logoutTime: new Date() } });
        res.json("logout successfully");
    }
    catch (e) {
        res.json("logout fail");
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