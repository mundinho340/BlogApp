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

router.get("/categorias/edit/:id", (req, res)=> {
    Categoria.findOne({_id: req.params.id}).then((categoria)=>{
        res.render('admin/editCategorias.handlebars',{categoria: categoria})

    }).catch((erro)=>{
        req.flash("error_msg", "Esta categoria não existe!")
        res.redirect("/admin/categorias")
    })
})

router.post("/categorias/edit", (req, res)=>{
    Categoria.findOne({_id: req.body.id}).then((categoria)=>{
        categoria.nome = req.body.nome
        categoria.slug= req.body.slug
        
        categoria.save().then(()=>{
            req.flash("success_msg", "Categoria editada com sucesso!")
            res.redirect("/admin/categorias")
        })

    }).catch((erro)=>{
        req.flash("error_msg", "Houve um erro ao editar a categoria")
        res.redirect("/admin/categorias")
    })
})

router.post("/categorias/deletar", (req, res)=>{
    Categoria.remove({_id: req.body.id}).then(()=>{
        req.flash("success_msg", "Categoria removida com successo!")
        res.redirect("/admin/categorias")
    }).catch((error)=>{
        req.flash("error_msg", "erro nao removeu a categoria!")
        res.redirect("/admin/categorias")
    })
    })

router.get("/postagens", (req, res)=>{
     res.render("admin/postagens")
})

router.get("postagens/add", (req, res)=>{
    res.render("admin/addpostagens")
})
 module.exports = router