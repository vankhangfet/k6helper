
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const pingRoute = require('./routes/ping');
const projectRoute = require ('./routes/project');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/ping',pingRoute)
app.use('/project',projectRoute)

module.exports = app;