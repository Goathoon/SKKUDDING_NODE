import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { RestaurantDto } from './dto/restaurant.dto';
// import { Restaurants } from './restaurant.model';
// import { Response, Request } from "express";
@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  //example
  async getAllRestaurants() {
    return await this.prisma.restaurant.findMany({
      select: {
        name: true,
        address: true,
        phone: true,
      },
    });
  }
  // private restaurants: RestaurantDto[];
  // constructor() {
  //   this.restaurants = Restaurants;
  // };
  // getRestaurants(){
  //   try{
  //     return this.restaurants;
  //   }catch(error){
  //     console.log(error.message);
  //   }
  // };

  // getRestaurantsByName (name:string): RestaurantDto{
  //   try {
  //     for (var i = 0; i < this.restaurants.length; i++) {
  //       if (this.restaurants[i]["name"] === name) {
  //         return this.restaurants[i];
  //       }
  //     }
  //     throw new Error("no such restaurant");
  //   } catch (error: any) {
  //     console.log(error.message);
  //   };
  // };

  // createRestaurant(restaurant:RestaurantDto){
  //   try {
  //     for (var i = 0; i < Restaurants.length; i++) {
  //       if (restaurant["name"] === Restaurants[i]["name"]) {
  //         throw new Error("it is duplicate");
  //       }
  //     }
  //     try {
  //       this.restaurants.push(restaurant);
  //       return this.restaurants;
  //     } catch (error: any) {
  //       console.log(error.message);
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // deleteRestaurantByName (name:string){
  //   try {
  //     const result = this.restaurants.filter(restaurant=>restaurant["name"] !== name);
  //     return result;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // updateRestaurantByName(changeName:string , changeInfo:RestaurantDto) {
  //   try {

  //     for (var i = 0; i < this.restaurants.length; i++) {
  //       if (changeName === this.restaurants[i]["name"]) {
  //         Restaurants[i] = changeInfo;
  //         return this.restaurants;
  //       }
  //     }
  //     throw new Error();
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
}
