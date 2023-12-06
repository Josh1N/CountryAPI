const express = require('express')
const app = express()


// routes
app.get('/', (req, res) => {
    res.send('Hello country api ')
})

app.listen(3000, () => {    
 console.log('Country API listening on port 3000')
})