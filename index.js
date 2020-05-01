const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3035

//RequestListner / RequestHandler
// app.httpMethod(url, callback)

app.use(express.json())

//connect to the database

mongoose.connect('mongodb://localhost:27017/jan-db')
.then(()=>{
console.log('connected to db')
})
.catch((err)=>{
    console.log(err)
})

const Schema = mongoose.Schema
///id, title, completed, createdAt, dueDate

const taskSchema = new Schema({
   title:{
       type: String,
       required: true
   },
   completed:{
       type: Boolean,
       default: false
   },
   dueDate:{
       type:Date
   },
   createdAt: {
       type: Date,
       default: Date.now
   },
   description:{
       type: String

   }
//    _id :{
//        type: mongoose.Types.ObjectId
    
//    }
})

const Task = mongoose.model('Task', taskSchema)

//url - localhost:3035/tasks
//method - get
//action - fetch all the tasks from the db and send

app.get('/tasks', (req, res)=>{
    Task.find()
    .then((tasks)=>{
res.json(tasks)
    })
    .catch((err)=>{
res.json(err)
    })
})

//url - localhost:3035/tasks
//method- post
// action - take the incoming data and save inside database

app.post('/tasks', (req, res)=>{
    const body = req.body
    const task = new Task(body)
    // task.title = body.title
    // task.description = body.description
    task.save()
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
})


//url - localhost:3035/tasks/:id
//method - get
//action - find a task based on the id and return to user

app.get('/tasks/:id', (req, res)=>{
    const id = req.params.id
    Task.findById(id)
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
})

//url - localhost:3035/tasks/:id
//method - delete
//action - find a task based on the id, delete the task

app.delete('/tasks/:id', (req, res)=>{
    const id = req.params.id
    Task.findByIdAndDelete(id)
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
})


// url - localhost:3035/tasks/:id
//method - put
//action - find a task based on the id and update

app.put('/tasks/:id', (req, res)=>{
    const id = req.params.id
    const body = req.body
    Task.findByIdAndUpdate(id, body, {new: true , runValidators: true})
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
})

app.listen(port, ()=>{
    console.log('listing on port', port)
})
// const users = [
//     {id:1, name:'sam'},
//     {id:2, name:'jack'}
// ]

// app.get('/', (req, res)=>{
//     res.send('welcome to the website !!!')
// })

// app.get('/users', (req, res)=>{
//     res.json(users)
// })

// //get, post, put, delete

// app.get('/users/:id', (req, res)=>{
// const id = req.params.id
// const user = users.find(user=>user.id == id)
// if(user){
//     res.json(user)
// }else{
//     res.json({})
// }
// })

// // app.post('/users/register', (req, res)=>{
// //     res.json({
// //         notice: 'http method -post, url - /users/register'
// //     })
// // })

// app.post('/users/register', (req, res) => {
//     const body = req.body 
//     console.log(body)
//     res.json(body)
// })

// app.put('/users/address', (req, res)=>{
//     res.json({
//         notice: 'http method - put, url - /users/address'
//     })
// })

// app.delete('/users/logout', (req, res)=>{
//     res.json({
//         notice:'http method - delete, url - /users/logout'
//     })
// })

