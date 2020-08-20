const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

mongoose.connect("mongodb://localhost:27017/nodeapi", {useNewUrlParser: true, useUnifiedTopology: true});

requireDir("./src/models");

const Product = mongoose.model('Product');

app.get("/", (req,res) => {
    Product.create({
        title: "New title",
         description: "title auto generated",
        url: "http://www.google.com"
        });
    return res.send("product created");
});

app.listen(3000);