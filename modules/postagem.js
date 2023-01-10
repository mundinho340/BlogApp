const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Postagem = new Schema({
    titulo:{
        type: String,
        required: true
    }, 

    slug:{
        type:String,
        required: true
    },

    descricao:{
        type: String,
        required: true
    }
})