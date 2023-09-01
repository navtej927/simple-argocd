const express = require("express");
const packageJson = require('../package.json')

const App = express();

App.get("/", (req, res) => {
    res.json({meta: {version: packageJson.version}, data: {1:!}})
})

module.exports = { 
    App
}