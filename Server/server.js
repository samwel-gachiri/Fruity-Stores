require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json);
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new map([[
    1, { priceInKsh: 50000, name: 'Oranges' }], [2, { priceInKsh: 20000, name: 'Bananas' }]

])


app.listen(3000);