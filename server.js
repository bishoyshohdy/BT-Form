const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://contracktrial:2EuvkmCCPctK3IX6@bt-form.lwhf1v2.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });


const UserSchema = new mongoose.Schema({

  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
  },
  mob: {
    type: String,
    required: true,
  },
  
});

const User = mongoose.model('User', UserSchema);


app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/Imgs', express.static(__dirname + '/Imgs')); 
app.use('/', express.static(__dirname + '/'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
    }
);

app.post("/", (req, res) => {
    let newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        mob: req.body.mob,
    });
    newUser.save();
    res.redirect('/success.html');
    });




