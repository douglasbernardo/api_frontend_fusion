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
    MongooseModule.forRoot('mongodb+srv://douglasmelo:api-fusion@cluster0.bbe3uaj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    PlanetsModule,
    CharacterModule,
    starSystemModule,
    spaceShipModule,
    UserModule,
    AuthModule
  ],
})
export class AppModule {}
