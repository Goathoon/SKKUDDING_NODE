import { Restaurants, Restaurant } from "./restaurant.model.js";
import { Response, Request } from "express";

// ------- 라우트 내 콜백함수 정의 -------- //
const getRestaurants = (req: Request, res: Response): void => {
  try {
    res.send(Restaurants);
  } catch (error) {
    res.send("cannot found route");
  }
};

const getRestaurantsByName = (req: Request, res: Response) => {
  try {
    const param = req.params;
    const rest: string = param.restname;
    for (var i = 0; i < Restaurants.length; i++) {
      if (Restaurants[i]["name"] === rest) {
        return res.status(200).send(Restaurants[i]);
      }
    }
    throw new Error();
  } catch (error: any) {
    res.status(404).send({
      error: "해당 맛집 정보가 존재하지 않습니다.",
    });
  }
};

const createRestaurant = (req: Request, res: Response) => {
  try {
    const body: Restaurant = req.body;
    for (var i = 0; i < Restaurants.length; i++) {
      if (body["name"] === Restaurants[i]["name"]) {
        throw new Error();
      }
    }
    try {
      Restaurants.push(body);
    } catch (error: any) {
      console.log(error.message);
    }
    res.send(body);
  } catch (error) {
    res.status(404).send({ error: "이미 해당 맛집 정보가 존재합니다" });
  }
};

const deleteRestaurantByName = (req: Request, res: Response) => {
  try {
    const deleteName: string = req.params.restname;
    for (var i = 0; i < Restaurants.length; i++) {
      if (deleteName === Restaurants[i]["name"]) {
        try {
          return res.status(200).send(Restaurants[i]);
        } catch (error) {
          return res.status(404).send("cannot write");
        }
      }
    }
    throw new Error();
  } catch (error) {
    return res
      .status(404)
      .send({ error: "해당 맛집 정보가 존재하지 않습니다." });
  }
};

const updateRestaurantByName = (req: Request, res: Response) => {
  try {
    const changeName: string = req.params.restname;
    const changeInfo: Restaurant = req.body;
    for (var i = 0; i < Restaurants.length; i++) {
      if (changeName === Restaurants[i]["name"]) {
        Restaurants[i] = changeInfo;
        return res.status(200).send(changeInfo);
      }
    }
    throw new Error();
  } catch (error) {
    res.status(404).send({ error: "해당 맛집 정보가 존재하지 않습니다." });
  }
};
export {
  getRestaurants,
  getRestaurantsByName,
  createRestaurant,
  deleteRestaurantByName,
  updateRestaurantByName,
};
