var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var books = [
    {
        title: '3 idiots',
        genre: 'Comedy',
        author: 'Chetan Bhagat',
        bookId: 657,
        read: false
    },
    {
        title: 'Hello',
        genre: 'History',
        author: 'Alay Vora',
        bookId: 655,
        read: false
    },
    {
        title: 'ABCD',
        genre: 'Entertainment',
        author: 'Rosy Shah',
        bookId: 656,
        read: false
    },
    {
        title: 'Maths',
        genre: 'Education',
        author: 'Rahul Mahajan',
        bookId: 658,
        read: false
    },
    {
        title: 'Science',
        genre: 'Education',
        author: 'Tarak Mehta',
        bookId: 659,
        read: false
    }, {
        title: 'Sunny Bunny',
        genre: 'Comedy',
        author: 'Sunny Deol',
        bookId: 660,
        read: false
    }, {
        title: 'ABCD2',
        genre: 'Entertainment',
        author: 'Rokiee Jeial',
        bookId: 661,
        read: false
    }, {
        title: 'Andaz Apna Apna',
        genre: 'Entertainment',
        author: 'Ramzan Tamuk',
        bookId: 662,
        read: false
    }, {
        title: 'Physics',
        genre: 'Education',
        author: 'Radio Man',
        bookId: 663,
        read: false
    }
];
var router = function (nav) {

    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function (err, results) {
                    res.send(results);
                    db.close();
                });
            });
        });


    return adminRouter;
};

module.exports = router;