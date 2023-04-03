import { Response, Request } from "express";
declare const getRestaurants: (req: Request, res: Response) => void;
declare const getRestaurantsByName: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
declare const createRestaurant: (req: Request, res: Response) => void;
declare const deleteRestaurantByName: (req: Request, res: Response) => Response<any, Record<string, any>>;
declare const updateRestaurantByName: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
export { getRestaurants, getRestaurantsByName, createRestaurant, deleteRestaurantByName, updateRestaurantByName, };
