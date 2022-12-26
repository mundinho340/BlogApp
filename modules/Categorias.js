const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Categoria = new Schema({
    nome:{
        type: String ,
        requeired: true
    },
    slug:{
        type:String ,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})