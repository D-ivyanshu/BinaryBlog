// const mongoose = require('mongoose');
// const cities = require('./cities');
// const { places, descriptors } = require('./seedHelpers');
// const Campground = require('../models/campground');

// // connecting mongodb / datbase
// mongoose.set('strictQuery', false);
// mongoose.connect(dbUrl, {
//     useNewUrlParser: true
// });
  
// const db=mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", ()=>{
//     console.log("Database Connected");
// });


// const sample = array => array[Math.floor(Math.random() * array.length)];


// const seedDB = async () => {
//     await Campground.deleteMany({});
//     for (let i = 0; i < 50; i++) {
//         const random1000 = Math.floor(Math.random() * 1000);
//         const price = Math.floor(Math.random() * 20) + 10;
//         const camp = new Campground({
//             author: '5f5c330c2cd79d538f2c66d9',
//             location: `${cities[random1000].city}, ${cities[random1000].state}`,
//             title: `${sample(descriptors)} ${sample(places)}`,
//             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
//             price,
//             images: [
//                 {
//                     url: 'https://res.cloudinary.com/di7zapb9e/image/upload/v1678223431/YelpCamp/qqasnldf93fd8sqbm8iy.jpg',
//                     filename: 'YelpCamp/qqasnldf93fd8sqbm8iy.jpg'
//                 },
//                 {
//                     url: 'https://res.cloudinary.com/di7zapb9e/image/upload/v1678224321/YelpCamp/3710161cc6d51315_h839q1.jpg',
//                     filename: 'YelpCamp/3710161cc6d51315_h839q1.jpg'
//                 }
//             ]
//         })
//         await camp.save();
//     }
// }

// seedDB().then(() => {
//     mongoose.connection.close();
// })