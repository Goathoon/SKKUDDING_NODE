"use strict";
const fs = require("fs");
const readBuffer = fs.readFileSync("./src/restaurant/data/restaurant.json", (encoding = "utf8"));
const jsonBuffer = JSON.parse(readBuffer);
const getRestaurants = (req, res) => {
    try {
        res.send(jsonBuffer);
    }
    catch (error) {
        res.send("cannot found route");
    }
};
const getRestaurantsByName = (req, res) => {
    try {
        const param = req.params;
        rest = param.restname;
        for (var i = 0; i < jsonBuffer["restaurants"].length; i++) {
            if (jsonBuffer["restaurants"][i]["name"] === rest) {
                return res.status(200).send(jsonBuffer["restaurants"][i]);
            }
        }
        throw new Error();
    }
    catch (error) {
        res.status(404).send({
            error: "해당 맛집 정보가 존재하지 않습니다.",
        });
    }
};
const createRestaurant = (req, res) => {
    try {
        const body = req.body;
        for (var i = 0; i < jsonBuffer["restaurants"].length; i++) {
            if (body["name"] === jsonBuffer["restaurants"][i]["name"]) {
                throw new Error();
            }
        }
        jsonBuffer["restaurants"].push(body);
        jsonWrite = JSON.stringify(jsonBuffer);
        try {
            fs.writeFileSync("./src/restaurant/data/restaurant.json", jsonWrite);
        }
        catch (error) {
            console.log(error.message);
        }
        res.send(body);
    }
    catch (error) {
        res.status(404).send({ error: "이미 해당 맛집 정보가 존재합니다" });
    }
};
const deleteRestaurantByName = (req, res) => {
    try {
        deleteParam = req.params;
        deleteName = deleteParam["restname"];
        for (var i = 0; i < jsonBuffer["restaurants"].length; i++) {
            if (deleteName === jsonBuffer["restaurants"][i]["name"]) {
                try {
                    return res.status(200).send(jsonBuffer["restaurants"][i]);
                    jsonBuffer["restaurants"].splice(i, 1);
                    jsonWrite = JSON.stringify(jsonBuffer);
                    fs.writeFileSync("./src/restaurant/data/restaurant.json", jsonWrite);
                }
                catch (error) {
                    return res.status(404).send("cannot write");
                }
            }
        }
        throw new Error();
    }
    catch (error) {
        return res
            .status(404)
            .send({ error: "해당 맛집 정보가 존재하지 않습니다." });
    }
};
const updateRestaurantByName = (req, res) => {
    try {
        changeParam = req.params;
        changeName = changeParam["restname"];
        changeInfo = req.body;
        for (var i = 0; i < jsonBuffer["restaurants"].length; i++) {
            if (changeName === jsonBuffer["restaurants"][i]["name"]) {
                jsonBuffer["restaurants"][i] = changeInfo;
                writeJson = JSON.stringify(jsonBuffer);
                fs.writeFileSync("./src/restaurant/data/restaurant.json", writeJson);
                return res.status(200).send(changeInfo);
            }
        }
        throw new Error();
    }
    catch (error) {
        res.status(404).send({ error: "해당 맛집 정보가 존재하지 않습니다." });
    }
};
module.exports = {
    getRestaurants,
    getRestaurantsByName,
    createRestaurant,
    deleteRestaurantByName,
    updateRestaurantByName,
};
//# sourceMappingURL=restaurant.router.js.map