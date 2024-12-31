require('dotenv').config()
const config = {
    mongoDBOptions:{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    mongoDBUri: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/canary-be',

    PORT: process.env.PORT || 4000,

    JWT_SECRET: process.env.JWT_SECRET,

    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
}

module.exports = config