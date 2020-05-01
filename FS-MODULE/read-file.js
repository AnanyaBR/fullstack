const fs = require('fs')
fs.readFile('./data.json', (err, data)=>{
    if(err){
        console.log(err)
    }
    const users = JSON.parse(data)
    console.log(users)
})