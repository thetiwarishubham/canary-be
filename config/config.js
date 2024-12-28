require('dotenv').config()
const config = {
    mongoDBOptions:{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    mongoDBUri: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/travelopia-be-assignment',

    PORT: process.env.PORT || 4000,

    JWT_SECRET: process.env.JWT_SECRET,
}

module.exports = config