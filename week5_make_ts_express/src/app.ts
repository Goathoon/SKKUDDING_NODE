import e from "express";
import * as path from "path";

const app: e.Express = e();

const port: number = 3001;

const modulePath: string = path.join(
  __dirname,
  "restaurant",
  "restaurant.router"
);
const router = require(modulePath);

//초기 미들웨어 설정
app.use((req: e.Request, res: e.Response, next) => {
  console.log("logging for routes");
  next();
});

//json읽을 수 있는 미들웨어 추가
// app.use(express.json());

app.get("/restaurants", router.getRestaurants); //당연히 () 실행하면 안됨
app.get("/restaurants/:restname", router.getRestaurantsByName);
app.post("/restaurants", router.createRestaurant);
app.delete("/restaurants/:restname", router.deleteRestaurantByName);
app.put("/restaurants/:restname", router.updateRestaurantByName);

app.use((req: e.Request, res: e.Response, next) => {
  res.send("ERROR: 404 Not Found Error");
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
