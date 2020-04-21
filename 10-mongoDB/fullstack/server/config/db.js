const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connect to ${conn.connection.host}`)

    } catch (error) {
        return console.log(`Could not connect : ${error}`)

    }
}

module.exports = connectDB;