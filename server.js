const express = require('express')
const app = express()
const port = 3000

// register the static assets 
app.use(express.static('public'))

// start the server
app.listen(port, () => {
    console.log(`Server lidtening http://localhost:${port}`)
})

// define routes here
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})