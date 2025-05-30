const express = require('express')
const app = express()
const PORT = 8000
const rappers = {
    '21 savage': {'birthname': 'Shéyaa Bin Abraham-Joseph',
    'location':'London, England',
    'age': 32},
    'chance the rapper': {
        'birthname': 'Chance Abraham-Joseph',
    'location':'Chicago',
    'age': 32
    },
    'jay z': {
        'birthname': 'SOme name',
    'location':'NY',
    'age': 50
    },
    'unknown' : {
        'birthname': 'uknown',
    'location':'unknown',
    'age': 0
    }

}
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase()
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    }else {
        res.json(rappers['unknown'])
    }
    
})

// use query parameter to get rapper

// make port
app.listen(PORT, ()=>{
    console.log(`the server is running on ${PORT}! you should go catch it`)
})