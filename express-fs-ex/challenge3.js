const express = require('express')
const fs = require('fs')
const app = express()
const port = 3040

app.use(express.json())

app.get('/submit', (req, res)=>{
    fs.readFile('./chall3.json',(err, data)=>{
        if(err){
            res.json(err)
        }
        const items = JSON.parse(data)
        res.json(items)
    })
})

app.get('/register', (req, res)=>{
    fs.readFile('./challfield.json',(err, data)=>{
        if(err){
            res.json(err)
        }
        const items = JSON.parse(data)
        res.json(items)
    })
})

// app.post('/submit',(req, res)=>{
//     const body = req.body
//     fs.readFile('./chall3.json', (err, data)=>{
//         if(err){
//             res.json(err)
//         }
//         const products = JSON.parse(data)
//         products.push(body)
//         const product = products[0]
//         const prod = Object.values(product.items).length
//         //console.log(prod)
    
//         fs.writeFile('./chall3.json', JSON.stringify(products),()=>{
//             res.json({
//                 items: 'total-items:'+prod
//             })
//         })
//     })
// })

app.post('/submit',(req, res)=>{
    const body = JSON.stringify(req.body)
    fs.writeFile('./chall3.json', body,()=>{
    const products = JSON.parse(body)
        const prod = Object.values(products.items).length
         res.json({
                items: 'total-items:'+prod
            })
        })
    })


    app.post('/register',(req, res)=>{
        const body = JSON.stringify(req.body)
        fs.writeFile('./challfield.json',body, ()=>{
            const items = JSON.parse(body)
            const prod = Object.keys(items).length
            res.json({
                total_fields:prod
            })
        })
    })


app.listen(port, ()=>{
    console.log('listing on port', port)
})