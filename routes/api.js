const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');


// Displaying/accessing notes api
router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', "utf8", (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).json({ status: 'error', msg: 'Error in posting review'})
        } else {
            const notes = JSON.parse(data);
            res.send(JSON.stringify(notes));
        }
    })
})

// Accessing notes api and posting a new note
router.post('/notes', (req, res) => {
    fs.readFile('./db/db.json', "utf8", (err, data) => {
        const notes = JSON.parse(data);
        const noteUpdate = {...req.body, id: uniqid()};
        
        notes.push(noteUpdate);
        fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), (err) => {
            res.json(notes);
        })
    });
    
})

// Accessing notes api and deleting an existing note
router.delete('/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', "utf8", (err, data) => {
        const notes = JSON.parse(data);
        const noteUpdate = notes.filter(note => note.id !== req.params.id)

        res.json(noteUpdate);
    })
})

module.exports = router;