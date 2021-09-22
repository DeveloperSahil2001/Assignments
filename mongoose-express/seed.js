const Product = require('./models/product');

const products = [
    {
        name: 'Laptop',
        price: 74999,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem animi consequatur voluptas beatae sunt quaerat reiciendis! Amet, maxime quos quia itaque veniam harum modi odit temporibus adipisci officia, fugit reprehenderit?'
    },
    {
        name: 'iPhone',
        price: 124999,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem animi consequatur voluptas beatae sunt quaerat reiciendis! Amet, maxime quos quia itaque veniam harum modi odit temporibus adipisci officia, fugit reprehenderit?'
    },
    {
        name: 'iPad',
        price: 54999,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem animi consequatur voluptas beatae sunt quaerat reiciendis! Amet, maxime quos quia itaque veniam harum modi odit temporibus adipisci officia, fugit reprehenderit?'
    },
    {
        name: 'iWatch',
        price: 28999,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem animi consequatur voluptas beatae sunt quaerat reiciendis! Amet, maxime quos quia itaque veniam harum modi odit temporibus adipisci officia, fugit reprehenderit?'
    },
    {
        name: 'Ear Pods',
        price: 36999,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem animi consequatur voluptas beatae sunt quaerat reiciendis! Amet, maxime quos quia itaque veniam harum modi odit temporibus adipisci officia, fugit reprehenderit?'
    },
    {
        name: 'Mac Book Pro',
        price: 144999,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem animi consequatur voluptas beatae sunt quaerat reiciendis! Amet, maxime quos quia itaque veniam harum modi odit temporibus adipisci officia, fugit reprehenderit?'
    },
];

const seedDB = async () => {
    await Product.deleteMany({});

    await Product.insertMany(products);
    console.log('DB Seeded');
}

module.exports = seedDB;
