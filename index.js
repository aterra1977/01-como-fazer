const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

const port = process.env.PORT || 3000

app.get('/', async (request, response) => {
    const content = await  axios.get('https://como-fazer-devpleno-cmaisterra.firebaseio.com/teste.json')
    console.log(content.data)
     response.render('index',   {i: content.data})
     //response.render('index')
}) 

app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)
//app.get('/', resolver)

app.listen(port, (err) => {
    if (err){
        console.log('error')
    }else{
        console.log('Como-Fazer Server is running on port:', port)
    }
}) 