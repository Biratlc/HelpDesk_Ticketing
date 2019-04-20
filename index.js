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


app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`));