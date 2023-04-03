"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRestaurantByName = exports.deleteRestaurantByName = exports.createRestaurant = exports.getRestaurantsByName = exports.getRestaurants = void 0;
const restaurant_model_1 = require("./restaurant.model");
const getRestaurants = (req, res) => {
    try {
        res.send(restaurant_model_1.Restaurants);
    }
    catch (error) {
        res.send("cannot found route");
    }
};
exports.getRestaurants = getRestaurants;
const getRestaurantsByName = (req, res) => {
    try {
        const param = req.params;
        const rest = param.restname;
        for (var i = 0; i < restaurant_model_1.Restaurants.length; i++) {
            if (restaurant_model_1.Restaurants[i]["name"] === rest) {
                return res.status(200).send(restaurant_model_1.Restaurants[i]);
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
exports.getRestaurantsByName = getRestaurantsByName;
const createRestaurant = (req, res) => {
    try {
        const body = req.body;
        for (var i = 0; i < restaurant_model_1.Restaurants.length; i++) {
            if (body["name"] === restaurant_model_1.Restaurants[i]["name"]) {
                throw new Error();
            }
        }
        try {
            restaurant_model_1.Restaurants.push(body);
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
exports.createRestaurant = createRestaurant;
const deleteRestaurantByName = (req, res) => {
    try {
        const deleteName = req.params["restname"];
        for (var i = 0; i < restaurant_model_1.Restaurants.length; i++) {
            if (deleteName === restaurant_model_1.Restaurants[i]["name"]) {
                try {
                    return res.status(200).send(restaurant_model_1.Restaurants[i]);
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
exports.deleteRestaurantByName = deleteRestaurantByName;
const updateRestaurantByName = (req, res) => {
    try {
        const changeName = req.params["restname"];
        const changeInfo = req.body;
        for (var i = 0; i < restaurant_model_1.Restaurants.length; i++) {
            if (changeName === restaurant_model_1.Restaurants[i]["name"]) {
                restaurant_model_1.Restaurants[i] = changeInfo;
                return res.status(200).send(changeInfo);
            }
        }
        throw new Error();
    }
    catch (error) {
        res.status(404).send({ error: "해당 맛집 정보가 존재하지 않습니다." });
    }
};
exports.updateRestaurantByName = updateRestaurantByName;
//# sourceMappingURL=restaurant.router.js.map