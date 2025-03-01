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

const path = require("path");

//Statischen Zugriff auf den public Ordner erlauben
app.use("/images", express.static(path.join(__dirname, "../frontend/public")));

const products = [
    { id: 1, name: "HDMI to Gardena", price: 19, description: "An adapter to convert Full HD to liter, distributes perfectly", shipping: "2-3", weight: 300, imageUrl: "http://localhost:8080/images/gardena_hdmi.jpeg" },
    { id: 2, name: "High voltage to Lightning", price: 9, description: "This adapter charges your phone from 0-100% in 3.2 seconds", shipping: "1-2", weight: 550, imageUrl: "http://localhost:8080/images/starkstrom_lightning.jpeg" },
    { id: 3, name: "Turn signal fluid", price: 14, description: "Indicator fluid for refilling Audi and BMW indicators", shipping:"3-5", weight: 500, imageUrl: "http://localhost:8080/images/blinkerfluessigkeit.jpeg" },
    { id: 4, name: "Glass nail", price: 1, description: "Perfect for hanging items on glass surfaces", shipping:"3-5", weight: 5, imageUrl: "http://localhost:8080/images/glasnagel.jpeg" },
    { id: 5, name: "Gear sand", price: 120, description: "For a sandy driving experience", shipping:"3-5", weight: 1000, imageUrl: "http://localhost:8080/images/getriebesand.jpeg" }
];

let supportRequests = [] //Array für die Contact/Support Requests
let cart = []; //Array für den Warenkorb
let orders = []; //Array für die Bestellungen

//GET: Produkte
app.get('/products', (req, res) => {
    res.json(products)
})

//GET: Homepage Produkte
app.get('/', (req, res) => {
    res.json(products)
})

//GET: Podukte mit Produkt ID
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({message: "Produkt nicht gefunden"});
    }

    res.json(product);
})

//POST: Kontaktformular
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

    res.status(201).json({ message: "Request successfully sent" });
    console.log(supportRequests)
})

//POST: Checkout mit Bestelldaten
app.post('/checkout', (req, res) => {
    const {firstname, lastname, street, city, article, quantity} = req.body;

    const newOrder = {
        id: orders.length + 1,
        firstname: firstname,
        lastname: lastname,
        street: street,
        city: city,
        article: article,
        quantity: quantity
    };

    orders.push(newOrder);
    res.status(201).json({ message: "Bestellung erfolgreich", order: newOrder });
    console.log(orders)
})


//GET: Warenkorb abrufen 
app.get("/cart", (req, res) => {
    res.json(cart);
});

//POST: Artikel zum Warenkorb hinzufügen
app.post("/cart", (req, res) => {
    const { id, name, price, quantity } = req.body;
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += quantity; // Menge erhöhen, falls Artikel schon vorhanden
    } else {
        cart.push({ id, name, price, quantity });
    }
    
    res.json(cart);
});

// DELETE: Einzelnen Artikel entfernen
app.delete("/cart/:id", (req, res) => {
    const { id } = req.params;
    cart = cart.filter(item => item.id !== parseInt(id));
    res.json(cart);
});

// DELETE: Gesamten Warenkorb leeren
app.delete("/cart", (req, res) => {
    cart = [];
    res.json({ message: "Warenkorb geleert", cart });
});

// PATCH: Anzahl eines Artikels im Warenkorb ändern
app.patch("/cart/:id", (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    const item = cart.find(item => item.id === parseInt(id));
    if (item) {
        item.quantity = Math.max(1, quantity); // Mindestanzahl = 1
        res.json(cart);
    } else {
        res.status(404).json({ message: "Artikel nicht gefunden" });
    }
});
