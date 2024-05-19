const book = require('../models/book');

exports.getBooks = (req, res, next) => {
    res.status(200).json(book.fetchAll());
}

exports.getBookById = (req, res, next) => {
    res.status(200).json(book.findById(req.params.bokId));
}

exports.save = (req, res, next) => {
    const bok = req.body;
    const savedbook = new Product(null, bok.title, bok.price, bok.ISBN, bok.publishedDate, bok.author).save();
    res.status(201).json(savedbook);
}

exports.update = (req, res, next) => {
    const bok = req.body;
    const updatedBook = new Product(req.params.bokId, bok.title, bok.price, bok.ISBN, bok.publishedDate, bok.author).update();
    res.status(200).json(updatedBook);
}

exports.deleteById = (req, res, next) => {
    book.deleteById(req.params.bokId);
    res.status(200).end();
}