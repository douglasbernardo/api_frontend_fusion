import { Module } from "@nestjs/common";
import { PlanetsController } from "./planets.controller";
import { PlanetsService } from "./planets.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Planet, planetSchema } from "src/schemas/planet.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Planet.name, schema: planetSchema}])
  ],
  controllers: [PlanetsController],
  exports: [PlanetsService],
  providers: [PlanetsService],
})
export class PlanetsModule {}