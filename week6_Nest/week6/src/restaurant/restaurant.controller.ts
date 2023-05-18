import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Delete,
  Put,
  Patch,
} from '@nestjs/common';
import { RestaurantDto } from './dto/restaurant.dto';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {} //DI

  @Get('/restaurants')
  getAll() {
    return this.restaurantService.getAllRestaurants();
  }

  //   @Get('/:name')
  //   getOne(@Param('name') name: string): RestaurantDto {
  //     return this.restaurantService.getRestaurantsByName(name);
  //   }

  //   @Post()
  //   create(@Body() restaurant: any) {
  //     return this.restaurantService.createRestaurant(restaurant);
  //   }

  //   @Delete('/:name')
  //   remove(@Param('name') name: string) {
  //     return this.restaurantService.deleteRestaurantByName(name);
  //   }

  //   @Patch('/:name')
  //   update(@Param('name') name: string, @Body() restaurantData: any) {
  //     return this.restaurantService.updateRestaurantByName(name, restaurantData);
  //   }
}
