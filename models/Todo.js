var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todosSchema = new Schema({
    item : String,
    done : Boolean
});


module.exports = mongoose.model('Todos', todosSchema);