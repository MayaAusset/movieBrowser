const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/movies", (req, res) => {
    axios
        .get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
        )
        .then(function (response) {
            res.status(200).json(response.data);
        })
        .catch(function (error) {
            console.log(`1 - Error from movies.routes in server: ${error}`);
            res.status(500).json(error);
        }
        )
        .then(function () {});
})

router.get("/movies/:searchBarInput", (req, res) => {
    const { searchBarInput } = req.params;
        axios
        .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchBarInput}`
        )
        .then(function (response) {
            res.status(200).json(response.data);
        }
        )
        .catch(function (error) {
            console.log(`2 - Error from movies.routes in server: ${error}`);
            res.status(500).json(error);
        }
        )
        .then(function () { });
});

module.exports = router;