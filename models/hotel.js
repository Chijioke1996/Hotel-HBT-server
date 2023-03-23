const express = require("express")
const mongoose = require("mongoose")
const hotelSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },

    email : {
        type: String,
        required: true
    },

    message : {
        type: String,
        required: true
    }
    ,
    createdAt : {
        type: Date,
        required: true,
        default: Date.now()
    }

})

module.exports = mongoose.model("Hotel", hotelSchema)