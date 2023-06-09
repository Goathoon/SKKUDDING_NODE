import { Response, Request } from "express";
declare const getRestaurants: (req: Request, res: Response) => Response;
declare const getRestaurantsByName: (req: Request, res: Response) => Response;
declare const createRestaurant: (req: Request, res: Response) => Response;
declare const deleteRestaurantByName: (req: Request, res: Response) => Response;
declare const updateRestaurantByName: (req: Request, res: Response) => Response;
export { getRestaurants, getRestaurantsByName, createRestaurant, deleteRestaurantByName, updateRestaurantByName, };
