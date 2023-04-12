const express = require('express')
const pg = require('pg')
const axios = require('axios')


const PORT = 5000

const config = {
    host: '<your-db-server-name>.postgres.database.azure.com',
    user: '<your-db-username>',
    password: '<your-password>',
    database: '<name-of-database>',
    port: 5432,
    ssl: true
}
const db = new pg.Client(config)
const app = express()
app.use(express.json())


const startApp = () => {
    try {
        app.listen(PORT, () => console.log(`Сервер запущен по порту : ${PORT}`))
    } catch (error) {
        console.log(error)
    }
} // закуриваем сервер

const getData = async (url) => {
    res = await axios.get(url)
    return res.data
} // получаем данные с апи





app.get('/data', async (req, res) => {
    try {
        const response = await getData('https://randomuser.me/api/')
        res.json(response)
    } catch (error) {
        console.log(error)
    }
})


startApp()