const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/', bookController.getBooks);

router.get('/:bokId', bookController.getBookById);

router.post('/', bookController.save);

router.put('/:bokId', bookController.update);

router.delete('/:bokId', bookController.deleteById);

module.exports = router;