const express = require("express")
const app = express()
const port = 3000
const cors = require("cors")

app.use(express.urlencoded({ extended : true }))
app.use(cors())
app.use(express.json())

const feedbacks = []
app.get("/", (req, res) => {
    res.json(feedbacks)


})

app.post("/feedback", (req, res) => {
    const feed = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        createdAt: new Date
    }

    res.status(200)
    feedbacks.push(feed)
    console.log(feedbacks);


})



app.listen(port , (error) => {
    if (error) {
        console.log("App encountered error while start", error);
    } else {
       console.log("App listening on port " +port); 
    }
})