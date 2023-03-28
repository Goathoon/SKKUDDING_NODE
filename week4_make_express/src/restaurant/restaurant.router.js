const fs = require("fs");
const readBuffer = fs.readFileSync(
  "./src/restaurant/data/restaurant.json", //작업 디렉토리에서 상대경로를 지정해줘야함.
  (encoding = "utf8")
); //readFile에서 콜백함수로 동기처리 할 수는 있음
const jsonBuffer = JSON.parse(readBuffer);

// ------- 라우트 내 콜백함수 정의 -------- //
const getRestaurants = (req, res) => {
  try {
    res.send(jsonBuffer);
  } catch (error) {
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
  } catch (error) {
    res.status(404).send({
      error: "해당 맛집 정보가 존재하지 않습니다.",
    });
  }
};

const createRestaurant = (req, res) => {
  try {
    const body = req.body;
    for (var i = 0; i < jsonBuffer["restaurants"].length; i++) {
      console.log(body["name"], jsonBuffer["restaurants"][i]["name"]);
      if (body["name"] === jsonBuffer["restaurants"][i]["name"]) {
        throw new Error();
      }
    }
    jsonBuffer["restaurants"].push(body);
    jsonWrite = JSON.stringify(jsonBuffer);
    try {
      fs.writeFileSync("./src/restaurant/data/restaurant.json", jsonWrite);
    } catch (error) {
      console.log(error.message);
    }
    res.send(body);
  } catch (error) {
    res.status(404).send({ error: "이미 해당 맛집 정보가 존재합니다" });
  }
};

module.exports = {
  getRestaurants,
  getRestaurantsByName,
  createRestaurant,
};
