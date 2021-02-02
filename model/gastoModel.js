const mongoose = require('mongoose')
var Schema = mongoose.Schema

var Despesa = new Schema({
    Nome: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: [true, 'Não tem nome? Ponha um nome!']
    },
    Valor: {
        type: Number,
        minlength: 1,
        required: [true, 'Eu sei que não foi de graça, pode por o valor...']
    },
    Data: {
        type: Date,
        required: [true, 'Tem certeza de isso aconteceu? Ponha uma data!'],
        default: Date.now
    },
    Descricao: {
        type: String,
        required: [true, 'Muito provavelmente você não vai lembrar com o que gastou se não por uma descrição...']
    }
});

module.exports = mongoose.model('Gastos', Despesa);

