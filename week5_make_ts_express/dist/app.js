import e from "express";
const app = e();
const port = 3001;
import * as router from "./restaurant/restaurant.router.js";
app.use((req, res, next) => {
    console.log("logging for routes");
    next();
});
app.use(e.json());
app.get("/restaurants", router.getRestaurants);
app.get("/restaurants/:restname", router.getRestaurantsByName);
app.post("/restaurants", router.createRestaurant);
app.delete("/restaurants/:restname", router.deleteRestaurantByName);
app.put("/restaurants/:restname", router.updateRestaurantByName);
app.use((req, res, next) => {
    res.send("ERROR: 404 Not Found Error");
});
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
//# sourceMappingURL=app.js.map