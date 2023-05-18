import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Delete,
  Put,
  Patch,
  Res,
  Req,
} from '@nestjs/common';
import { RestaurantDto } from './dto/restaurant.dto';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {} //DI

  @Get()
  async getAll(@Res() res) {
    try {
      const restaurants = await this.restaurantService.getAllRestaurants();
      console.log(restaurants);
    } catch (error) {
      console.log(error.message);
      res.send({ success: false });
    }
    res.send({ success: true });
  }

  @Get('/:name')
  async getOne(@Param('name') name: string, @Res() res) {
    try {
      const restaurantName = await this.restaurantService.getRestaurantsByName(
        name
      );
      if (restaurantName === null) {
        throw new Error('There is no Restaurant');
      }
      res.send({ success: true });
    } catch (error) {
      console.log(error.message);
      res.send({ success: false });
    }
  }

  @Post()
  async create(@Body() data: any, @Res() res) {
    try {
      const createRestaurant = await this.restaurantService.createRestaurant(
        data
      );
      if (!createRestaurant) {
        throw new Error('it is duplicate');
      }
      res.send({ success: true });
    } catch (error) {
      console.log(error.message);
      res.send({ success: false });
    }
  }

  @Delete('/:name')
  async remove(@Param('name') name: string, @Res() res) {
    try {
      const result = await this.restaurantService.deleteRestaurantByName(name);
      if (result) {
        return res.send({ success: true });
      }
      throw new Error('there is no restaurant exists');
    } catch (error) {
      console.log(error.message);
      res.send({ success: false });
    }
  }

  @Patch('/:name')
  async update(@Param('name') name: string, @Body() data: any, @Res() res) {
    try {
      const result = await this.restaurantService.updateRestaurantByName(
        name,
        data
      );
      console.log(result);
      if (result) {
        return res.send({ success: true });
      }
      throw new Error('error for update restaurant');
    } catch (error) {
      console.log(error.message);
      res.send({ success: false });
    }
  }
}
