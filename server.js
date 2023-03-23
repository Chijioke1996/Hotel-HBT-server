require("dotenv").config()
const express = require("express")
const app = express()
const port = 3000
const cors = require("cors")
const mongoose = require("mongoose")
const Hotel = require("./models/hotel")

app.use(express.urlencoded({ extended : true }))
app.use(cors())
app.use(express.json())

// const feedbacks = []
app.get("/", async (req, res) => {
   try {
    const feedback = await Hotel.find()
    res.json(feedback)
   } catch (error) {
    res.status(500).json({Message: error.Message})
   }


})

app.post("/feedback", async (req, res) => {

    const feed = new Hotel({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        createdAt: new Date
    })

    try {
        const newfeed = await feed.save()
        res.status(200)
        console.log(newfeed);

        
    } catch (error) {
        res.status(500).json({Message: error.Message})
    }

    // res.status(200)
    // feedbacks.push(feed)
    // console.log(feedbacks);


})

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on("error", (error) => {
    console.error(error)
})
db.once("open", () => {
    console.log("Connected to Database successfully")
})



app.listen(port , (error) => {
    if (error) {
        console.log("App encountered error while start", error);
    } else {
       console.log("App listening on port " +port); 
    }
})