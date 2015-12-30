var express = require('express'); // require express package
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Todos = require('../models/Todo'); // Lets call todos model
var router = express.Router(); // use express.Router() object

// GET todos
router.get('/', function(req, res) {

    var noValue = false;

    Todos.find({}, function (err, result) {
        if(err) res.send(err);

        res.render('index', {todos: result, noValue:noValue});
    });
});

// POST todos
router.post('/', function (req, res) {

    var item = req.body.todo;
    var done = false;
    var todo = new Todos({
        item: item,
        done: done
    });
    todo.save(function (err, result) {
        if(err) res.send(err);
        res.redirect('/');
    });
});

// Just in case you need to see
router.get('/:todo_id/show', function (req, res) {
    console.log(req.params.todo_id);
    Todos.findById(req.params.todo_id, function (err, result) {
        if(err) res.send(err);

        res.send(result);
    });
});

// POST - make it done
router.get('/:todos_id/update', function (req, res) {

    Todos.findById(req.params.todos_id, function (err, todos) {
        if(err) res.send(err);

        if (todos.done === true) {
            todos.done = false;
        } else {
            todos.done = true;
        }
        console.log(todos.done);
        todos.save(function (err) {
            if(err) res.send(err);

            res.redirect('/');
        });


    })
});

// DELETE one todos
router.get('/:todo_id/delete', function (req, res) {

    Todos.remove({
            _id: req.params.todo_id
        }, function (err, result) {

            if(err) res.send(err);

            res.redirect('/');
    });
});


// This module exports this file and make available whenever is called
module.exports = router;