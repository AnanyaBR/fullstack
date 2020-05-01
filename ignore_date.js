const express = require('express')
var moment = require('moment')
const app = express()
const port = 3040

// app.get('/', (req, res)=>{
//     res.send('welcome to the website :)')
// })

moment().format()

const custom = {date:moment().format()}
const custom1 = {date:moment().format('LL')}
const custom2 = {date:moment().subtract(1, 'days').format('LL')}
const custom3 = {date:moment().add(1,'days').format('LL')}



const dates = [{date:'26/4/2010'}]

app.get('/date/default', (req, res)=>{
    res.json(custom)
})

app.get('/date/today', (req, res)=>{
res.json(custom1)
})

app.get('/date/yesterday', (req, res)=>{
    res.json(custom2)
})

app.get('/date/tomorrow', (req,res)=>{
    res.json(custom3)
})

app.get('/users/:id', (req, res)=>{
    const id = req.params.id
    const user = users.find(user=>user.id == id)
    if(user){
        res.json(user)
    }else{
        res.json({})
    }
    })


app.listen(port, ()=>{
    console.log('listening on port', port)
})

