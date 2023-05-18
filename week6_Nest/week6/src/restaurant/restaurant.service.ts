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

  async getRestaurantsByName(name: string) {
    return await this.prisma.restaurant.findUnique({
      where: {
        name: name,
      },
      select: {
        name: true,
        address: true,
        phone: true,
      },
    });
  }

  async createRestaurant(data: any) {
    try {
      const restaurants = await this.getAllRestaurants();
      for (var i = 0; i < restaurants.length; i++) {
        if (data['name'] === restaurants[i]['name']) {
          throw new Error('it is duplicate');
        }
      }
      console.log(data);
      await this.prisma.restaurant.create({ data });
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }

  async deleteRestaurantByName(name: string) {
    try {
      await this.prisma.restaurant.delete({
        where: {
          name: name,
        },
      });
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }

  async updateRestaurantByName(name: string, data: any) {
    try {
      // for (var i = 0; i < this.restaurants.length; i++) {
      //   if (changeName === this.restaurants[i]["name"]) {
      //     Restaurants[i] = changeInfo;
      //     return this.restaurants;
      //   }
      const restaurants = await this.getAllRestaurants();
      for (var i = 0; i < restaurants.length; i++) {
        if (name === restaurants[i]['name']) {
          await this.prisma.restaurant.update({
            where: {
              name: name,
            },
            data: data,
          });
          return true;
        }
      }
      throw new Error('there is no restaurant which will be updated');
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}
