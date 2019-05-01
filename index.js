/*
const express = require('express');
const app = express();
app.use(express.json());
const port = 1000
const tickets  = [
    {
        "id": 1,
        "created_at": "2015-07-20T22:55:29Z",
        "updated_at": "2016-05-05T10:38:52Z",
        "type": "incident",
        "subject": "MFP not working right",
        "description": "PC Load Letter? What does that even mean???",
        "priority": "med",
        "status": "open",
        "recipient": "support_example@selu.edu",
        "submitter": "Michael_bolton@selu.edu",
        "assignee_id": 235323,
        "follower_ids": [235323, 234],
        "tags": ["enterprise", "printers"],
    },
    {
        "id": 2,
        "created_at": "2015-07-20T22:55:29Z",
        "updated_at": "2016-05-05T10:38:52Z",
        "type": "incident",
        "subject": "MFP not working right",
        "description": "PC Load Letter? What does that even mean???",
        "priority": "med",
        "status": "open",
        "recipient": "support_example@selu.edu",
        "submitter": "Michael_bolton@selu.edu",
        "assignee_id": 235323,
        "follower_ids": [235323, 234],
        "tags": ["enterprise", "printers"],
    },
    {
        "id": 3,
        "created_at": "2015-07-20T22:55:29Z",
        "updated_at": "2016-05-05T10:38:52Z",
        "type": "incident",
        "subject": "MFP not working right",
        "description": "PC Load Letter? What does that even mean???",
        "priority": "med",
        "status": "open",
        "recipient": "support_example@selu.edu",
        "submitter": "Michael_bolton@selu.edu",
        "assignee_id": 235323,
        "follower_ids": [235323, 234],
        "tags": ["enterprise", "printers"],
    },

]

app.get('/', (req, res) => res.send('Getting into ticket webpage'));
app.get('/rest/list/', (req, res) => res.send(tickets));
app.get('/rest/list/:id', (req, res) => {
    const ticket = tickets.find(c => c.id === parseInt(req.params.id))
    if(!ticket) res.status(404).send("ticket not found")
    res.send(ticket)
});

app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`));*/

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
var db= null;
var dbset= require ('mongodb');
const ObjectID= dbset.ObjectID;
var app = new express();
app.use(express.json());
const port= 2000
var Tickets="ticket";

function handleError (res, message, displayMessage){
    res.status(400).send({
        messsage:displayMessage
    })
}

dbset.MongoClient.connect("mongodb+srv://admin:meet26060@cluster0-cog0u.mongodb.net/test?retryWrites=true", {useNewUrlParser: true}, function(e,d){
    if (e) {
        console.log(e);
        console.log("cannot connect to database");
    }
    else{
        db=d.db('RWRProject');
        console.log("successfully connected to database");

    }
});




app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`));
