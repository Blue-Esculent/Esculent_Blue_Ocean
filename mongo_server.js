const express = require("express");
const mongoose = require('mongoose');
const Users = require("./db/mongo");
const path = require("path");
const PORT = 3001;
mongoose.connect("mongodb://localhost/users", { useNewUrlParser: true });


const app = express();
//parse express body might replace with body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//used when utilizing the build file
//app.use(express.static(path.join(__dirname, "./frontend/dist")));
//used when using public folder html file
app.use(express.static("public"));


//get finds one match based off of name entered login
app.get("/api/login/:user/:pass", function(req, res) {
    var name = req.params.user;
    var password= req.params.pass;
    
    Users.findOne({name: new RegExp(name, 'i')})
    .then(function(data){ 
        if(data.password===password) {      
        res.json("Successfully logged in");
        }else{
            res.json("Incorrect Password");
        }
    })
    .catch(function(err){
        res.json(err);
    })
  });


  //get request to user based on date selected.
  app.post("/api/date", function(req,res){
    var date=req.body.date;
    var name=req.body.name;

    Users.findOne({name: new RegExp(name, 'i')})
    .then(function(data){
        if(date=== data.date){
            res.json(data)
        }else{
            res.json("No Recipe")
        }
        
    })

  })


//post new entry into users new user
app.post("/signUp", (req,res)=>{
    console.log("in post request");
    Users.create(req.body)
    .then(function(data){
       
        res.json("User Created");
    })
    .catch(function(err){
        res.json(err);
    })
})

//for proxy to render the dist files
// app.get('/itemreview', (req, res) => {
//     res.sendFile(path.join(`${__dirname}/frontend/dist/bundle.js`))
//   });

//get specific product by name

  
  app.listen(PORT, () => {
    console.log(`server is running and listening on port ${PORT}`);
  });



