

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



app.get('/', (req,res)=>
    {
        res.send('Movie ticket is here');
    }
)


app.get("/rest/list/", function(req, res) {
    db.collection(Tickets)
        .find({})
        .toArray(function(err, docs) {
            if (err) {
                handleError(res, err.message, "Failed to get tickets.");
            } else {
                res.status(200).json(docs);
            }
        });
});
app.get("/rest/ticket/:id", function(req, res) {

    db.collection(Tickets).findOne(
        { _id: new ObjectID(req.params.id)

        },
        function(err, doc) {
            if (err) {
                handleError(res, err.message, "Failed to get a ticket");
            } else {
                res.status(200).json(doc);
            }
        }
    );
});
app.post("/rest/ticket/", function(req, res) {
    var newTicket = req.body;
    if (!req.body.assignee_id||!req.body.follower_ids)
    {
        handleError(res, "Invalid user input", "Must provide assignee id and follower's id.", 400);
    } else {
        db.collection(Tickets).insertOne(newTicket, function(err, doc) {
            if (err) {
                handleError(res, err.message, "Failed to create new ticket.");
            } else {
                res.status(201).json(doc.ops[0]);
            }
        });
    }
});
//update the ticket in database
app.put("/rest/ticket/:id", function(req, res) {
    var updateDoc = req.body;
    delete updateDoc._id;

    db.collection(Tickets).updateOne(
        { _id: new ObjectID(req.params.id) },
        { $set: updateDoc },
        { upsert: false },
        function(err, doc) {
            if (err) {
                handleError(res, err.message, "Failed to update ticket");
            } else {
                updateDoc._id = req.params.id;
                updateDoc.createDate = new Date();
                res.status(200).json(updateDoc);
            }
        }
    );
});
// //delete the ticket in database
//     app.delete("/rest/ticket/:id", (req, res) => {
//         db.collection(Tickets).findOneAndDelete(
//             { "_id.$oid": req.params.id },
//             (err, result) => {
//                 if (err) return res.send(500, err);
//                 res.send({ message: "ticket got deleted" });
//             }
//         );
//     });
app.delete("/rest/ticket/:id", function(req, res) {
    db.collection(Tickets).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
        if (err) {
            handleError(res, err.message, "Failed to delete contact");
        } else {
            res.status(200).json(req.params.id +"this id got deleted");
        }
    });
});






app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`));
