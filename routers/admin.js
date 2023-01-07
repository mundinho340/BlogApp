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
    Categoria.find().sort({date: "DESC"}).then((categorias)=>{
        res.render("admin/categorias", {categorias: categorias})

    }).catch((error)=>{
        req.flash("error_msg", "Houve um erro ao listar as categorias")
        res.redirect("/admin")
    })
})

router.get("/categorias/add",(req, res)=>{
    res.render("./admin/addcategorias")
})

router.post("/categorias/nova",(req, res) => {
    var erros=[]

    if(!req.body.nome || typeof req.body.nome== undefined ||  req.body.nome== null){
        erros.push({texto: "Nome invalido"})
    }

    if(!req.body.slug || typeof req.body.slug == undefined|| req.body.nome == null){
        erros.push({texto: "Slug invalido"})
    }

    if(req.body.nome.length < 2){
        erros.push({texto: "Nome da categoria muito pequeno"})
    }

    if(erros.length>0 ){
        res.render("admin/addcategorias.handlebars", {erros: erros})
    }else{       
        const novaCategoria ={
            nome: req.body.nome,
            slug: req.body.slug
        }

        new Categoria(novaCategoria).save().then(()=>{
            req.flash("success_msg", "Categoria criada com sucesso" )
            res.redirect('/admin/categorias')
        }).catch((e)=>{
            res.flash("error_msg", "Houve um erro ao salvar a categoria, tenta novamente")
        })
    }

})

 module.exports = router