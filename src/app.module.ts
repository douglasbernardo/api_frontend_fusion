import { Module } from '@nestjs/common';
import { PlanetsModule } from './planets/planets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterModule } from './characters/character.module';
import { starSystemModule } from './startSystems/starSystem.module';
import { spaceShipModule } from './spaceShips/spaceShip.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/frontend-fusion'),
    PlanetsModule,
    CharacterModule,
    starSystemModule,
    spaceShipModule,
    UserModule,
    AuthModule
  ],
})
export class AppModule {}
