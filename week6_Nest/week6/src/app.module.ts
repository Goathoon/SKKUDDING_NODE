import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantController } from './restaurant/restaurant.controller';
import { RestaurantModule } from './restaurant/restaurant.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [RestaurantModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
