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
    res.send('Server del mio blog express')
})

const posts = [
    {
        titolo: "ciambellone",
        contenuto: "Un soffice ciambellone fatto in casa, perfetto per la colazione o una merenda genuina.",
        immagine: "http://localhost:3000/images/ciambellone.jpeg",
        tags: ["cucina", "ricette", "dolci"]
    },
    {
        titolo: "cracker di barbabietola",
        contenuto: "Cracker croccanti alla barbabietola, uno snack sfizioso e ricco di colore.",
        immagine: "http://localhost:3000/images/cracker_barbabietola.jpeg",
        tags: ["cucina", "snack", "dolci", "salati"]
    },
    {
        titolo: "pane fritto dolce",
        contenuto: "Pane fritto dorato e zuccherato, una ricetta semplice che richiama i sapori della tradizione.",
        immagine: "http://localhost:3000/images/pane_fritto_dolce.jpeg",
        tags: ["cucina", "ricette", "dolci"]
    },
    {
        titolo: "pasta di barbabietola",
        contenuto: "Pasta dal colore vivace e dal gusto delicato, ideale per portare originalità in tavola.",
        immagine: "http://localhost:3000/images/pasta_barbabietola.jpeg",
        tags: ["cucina", "ricette", "dolci", "salati"]
    },
    {
        titolo: "torta paesana",
        contenuto: "Un classico dolce della tradizione contadina, preparato con ingredienti semplici e genuini.",
        immagine: "http://localhost:3000/images/torta_paesana.jpeg",
        tags: ["cucina", "ricette", "dolci"]
    },
]

app.get('/bacheca', (req, res) => {
    res.json(posts)
})