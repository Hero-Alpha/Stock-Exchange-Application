require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParer = require("cookie-parser");

const { PositionsModel } = require("./models/PositionsModel");
const { HoldingModel } = require("./models/HoldingModel");
const { OrdersModel } = require("./models/OrdersModel");
const { WatchlistModel } = require("./models/WatchlistModel");
const authRoute = require("./routes/AuthRoute");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors({
    origin: [`http://localhost:3000`],
    methods:["GET", "POST" , "PUT", "DELETE"],
    credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParer());
app.use(express.json());

// ----------------------------------------------------------------------------------------------------------------------------
// DATABASE & SERVER CONNECTION
const dbUrl = process.env.MONGO_URL;

mongoose
    .connect(dbUrl)
    .then(() => {
        console.log("##--Database connected successfully--##");

        app.listen(PORT, () => {
            console.log(`##--Server running on PORT ${PORT}--##`);
        });
    })
    .catch((err) => {
        console.error("Database connection failed:", err);
    });

// ----------------------------------------------------------------------------------------------------------------------------
// API TO ADD DUMMY DATA TO DATABASE

app.get('/addDummyData', async (req, res) => {
    const Data = [
        //Data in array from
        
    ];

    try {
        await WatchlistModel.insertMany(Data);
        res.send("Data added successfully to the database");
    } catch (error) {
        console.error("Error adding data:", error);
        res.status(500).send("Error adding data to the database");
    }
});

// ----------------------------------------------------------------------------------------------------------------------------
//API TO SIGNUP

app.use("/" , authRoute);

// ----------------------------------------------------------------------------------------------------------------------------
// API ENDPOINT TO FETCH DATA FROM DATABASE

app.get("/getHoldingsData", async (req, res) => {
    let holdingData = await HoldingModel.find({});
    res.json(holdingData);
});

app.get("/getPositionsData", async (req, res) => {
    let positionsData = await PositionsModel.find({});
    res.json(positionsData);
});

app.get("/getOrdersData", async (req, res) => {
    let ordersData = await OrdersModel.find({});
    res.json(ordersData);
});

app.get("/getWatchlistData", async (req, res) => {
    let watchlistData = await WatchlistModel.find({});
    res.json(watchlistData);
});

// ----------------------------------------------------------------------------------------------------------------------------
// API ENDPOINT TO BUY ORDERS

app.post("/newOrder", async (req, res) => {
    try {
        const newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        });
        await newOrder.save();
        res.send("Order saved");
    } catch (error) {
        console.error("Failed to save order:", error);
        res.status(500).send("Failed to save order");
    }
});

//API ENDPOINT TO SELL ORDERS

app.delete("/deleteOrder/:name", async (req, res) => {
    try {
        const result = await OrdersModel.deleteOne({ name: req.params.name });
    res.send(result);
} catch (error) {
    res.status(500).send(error.message);
  }
});


//API ENDPOINT TO DELETE FROM WATCHLIST STOCKS(FAVOURITES)

app.delete('/deleteWatchlist/:id', async (req, res) => {
    try {
        const index = await WatchlistModel.findByIdAndDelete(req.params.id)
        res.send(index)
    } catch (error) {
        res.status(500).send(error.message)
    }
});

// ----------------------------------------------------------------------------------------------------------------------------


