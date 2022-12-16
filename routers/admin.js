 const router = require('express').Router()

router.get('/', (req, res)=>{
    res.send('Página principal do painel ADM')
})

router.get('/posts', (req, res)=>{
    res.send('pagina de posts')
})

router.get('/categorias',(req, res)=>{
    res.send('Paginas de categorias')
})

 module.exports = router