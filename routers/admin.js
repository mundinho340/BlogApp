 const router = require('express').Router()
 const mongoose = require("mongoose")
 require("../modules/Categoria")
 const Categoria= mongoose.model("categorias")

router.get('/', (req, res)=>{
    res.render("./admin/index.handlebars")
})

router.get('/posts', (req, res)=>{
    res.send('pagina de posts')
})

router.get('/categorias',(req, res)=>{
    res.render("./admin/categorias.handlebars")
})

router.get("/categorias/add",(req, res)=>{
    res.render("./admin/addcategorias")
})

router.post("/categorias/nova",(req, res) => {
    var erros=[]

    if(!req.body.nome || typeof req.body.nome== undefined ||  req.body.nome== null){
        erros.push({texto: "Nome invalido"})
    }


    const novaCategoria ={
        nome: req.body.nome,
        slug: req.body.slug
    }

    new Categoria(novaCategoria).save().then(()=>{
        console.log("Categoria salva com sucess!")
    }).catch((e)=>{
        console.log("ocorreu   um erro ao salvar a categoria por "+e)
    })
})

 module.exports = router