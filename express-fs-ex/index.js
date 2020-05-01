const express = require ('express')
const fs = require('fs')
const app = express()
const port = 3050

app.use(express.json())

app.get('/products', (req, res)=>{
    fs.readFile('./data.json', (err, data)=>{
        if(err){
            res.json(err)
        }
        const products = JSON.parse(data)
        res.json(products)
    })
})


app.post('/products', (req, res)=>{
    const body = req.body
    fs.readFile('./data.json', (err, data)=>{
        if(err){
            res.json(err)
        }
        const products = JSON.parse(data)
        products.push(body)
        fs.writeFile('./data.json', JSON.stringify(products), ()=>{
            res.json({
                notice: 'succesfully added product'
            })
        })
    })
})


app.get('/products/:id', (req, res)=>{
    const id = req.params.id
    fs.readFile('./data.json', (err,data)=>{
        if(err){
            res.json(err)
        }
        const products = JSON.parse(data)
        const product = products.find(product=>product.id== id)
        if(product){
            res.json(product)
        }else{
            res.json({})
        }
    })
})

app.listen(port, ()=>{
    console.log('listening on port', port)
})