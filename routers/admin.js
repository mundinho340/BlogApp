 const router = require('express').Router()
 const mongoose = require("mongoose")
 require("../modules/Categorias")
 const Categorias = mongoose.model("categorias")

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
    const novaCategoria ={
        nome: req.body.nome,
        slug: req.body.slug
    }
})

 module.exports = router