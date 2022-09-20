const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://admin:thalia@cluster0.zs0t6nc.mongodb.net/tickethack';



mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
.then(() => console.log('Database connected'))
.catch(error => console.error(error));

module.exports = connectionString;