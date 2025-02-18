const express = require('express');
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json())

app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
)

const products = [
    { id: 1, name: "HDMI auf Gardena", price: 19, description: "Ein Adapter um Full HD auf Liter umzuwandeln, verteilt perfekt", category: "adapter", shipping: "2-3", weight: 300},
    { id: 2, name: "Starkstrom auf Lightning", price: 9, description: "Dieser Adapter lädt ihr Handy von 0-100% in 3,2 Sekunden auf", category: "adapter", shipping: "1-2", weight: 550},
    { id: 3, name: "Blinkerflüssigkeit", price: 14, description: "Blinkerflüssigkeit zum nachfüllen für Audi und BMW Blinker", category: "autoteile", shipping:"3-5", weight: 500},
    { id: 4, name: "Glasnagel", price: 1, description: "Perfekt zum aufhängen von Gegenständen an Glasflächen", category: "werkzeuge", shipping:"3-5", weight: 5},
];

var supportRequests = []

app.get('/products', (req, res) => {
    const { category } = req.query;

    if (category) {
        const filteredProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
        return res.json(filteredProducts)
    }
    res.json(products)
})

app.get('/', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({message: "Produkt nicht gefunden"});
    }

    res.json(product);
})

app.post('/contact', (req, res) => {
    const {name, email, message} = req.body;

    if(!name || !email || !message) {
        return res.status(400).json({message: "required fields: name, email, message"})
    }

    const newRequest = {
        id: supportRequests.length + 1,
        name: name,
        email: email,
        message: message,
    };

    supportRequests.push(newRequest);

    res.status(201).json({ message: "Anfrage erfolgreich gespeichert" });
    console.log(supportRequests)
})


