const gastoModel = require('../model/gastoModel');
const { texto } = require('../views/cadastro');
const error = require('../views/error');

module.exports = {
    create: async (req, res) => {
        console.log(req.body)
        const { petName, petPrice, petDate, petDesc } = req.body
        new gastoModel({
            Nome: petName,
            Valor: petPrice,
            Data: petDate,
            Descricao: petDesc
        }).save().then(() => {
            res.send(texto("Cadastro feito com sucesso.", res))
            console.log('Cadastro feito com sucesso.')
        }).catch(e => console.error(`error: ${e}`))
    },

    getAll: async (_, res) => { 
        const query = await gastoModel.find({})
        res.json(query)
    },

    delete: async (req, res) => {
        let { id } = req.params
        await gastoModel.deleteOne({_id: id})
        res.send('excluido com sucesso \n')
    }
}
