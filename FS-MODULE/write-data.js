const fs = require('fs')
const data = JSON.stringify([{name:'sunil'},{name:'deepa'}])
fs.writeFile('./data2.json', data, ()=>{
    console.log('written to file')
})