const express = require('express');
const app = express();

// SUBMIT ASSIGNMENT API
app.post('/submitassignment', (req, res) => {
    res.send(`
        <html>
            <head><title>Submit Assignment</title></head>
            <body>
                <h1>INSIDE SUBMIT ASSIGNMENT API</h1>
            </body>
        </html>
    `);
});

// VIEW ASSIGNMENT API
app.get('/viewassignment', (req, res) => {
    res.send(`
        <html>
            <head><title>View Assignment</title></head>
            <body>
                <h1>INSIDE VIEW ASSIGNMENT API</h1>
            </body>
        </html>
    `);
});

// EDIT PROFILE API
app.put('/editprofile', (req, res) => {
    res.send(`
        <html>
            <head><title>Edit Profile</title></head>
            <body>
                <h1>INSIDE EDIT PROFILE API</h1>
            </body>
        </html>
    `);
});

// START THE SERVER ON PORT 5010
app.listen(5005, () => {
    console.log('EXPRESS Server Started at Port No: 5005');
});
