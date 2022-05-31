const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const ticketsRouter = require('./routers/ticketsRouter')
const colorRouter = require('./routers/colorRouter')
const app = express()
const fs = require('fs');
const https = require('https');
// const userRouter = require('./routers/userRouter')

const options = {
    cert: fs.readFileSync('./sslcert/fullchain.pem'),
    key: fs.readFileSync('./sslcert/privkey.pem')
};

const PORT = process.env.PORT_SCANER || 8001

app.use(express.json({limit: "50mb"}))

app.use(
    cors({
        // credentials: true,
        // origin: [process.env.URL_CLIENT],
        // optionsSuccessStatus: 200
    })
);

app.use('/api/ticket', ticketsRouter)
app.use('/api/color', colorRouter)
// app.use('/api/auth', userRouter)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL_SCANER)
        https.createServer(options, app).listen(8444);
        app.listen(PORT, () => {
            console.log(`server is started on port ${PORT}`)
        })

    } catch (e) {
        console.log(e)
    }
}

start()
