const express = require('express');
const router = express.Router();

const Book = require('../models/bookModel');

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json({ message: "Get request - Fetching all books.", books:books });
});

router.post('/', (req, res) => {
    console.log(req.body); // Assuming you have body-parser middleware set up
    res.json({message: "Post request - Creating new book."});
});

router.put('/', (req, res) => {
    res.json({message: "Put request - Updating book."});
});

router.delete('/', (req, res) => {
    res.json({message: "Delete request - Deleting book."});
});

module.exports = router;