import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { ParkingSpacesModule } from './parking-spaces/parking-spaces.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'test',
      password: 'test',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
    UsersModule,
    VehiclesModule,
    ParkingSpacesModule,
    ReservationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
