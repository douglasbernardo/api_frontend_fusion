import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { starSystem, starSystemSchema } from "src/schemas/starSystems.schema";
import { starSystemController } from "./starSystem.controller";
import { starSystemService } from "./starSystem.service";

@Module({
  imports: [
    MongooseModule.forFeature([{name: starSystem.name, schema: starSystemSchema}])
  ],
  controllers: [starSystemController],
  exports: [starSystemService],
  providers: [starSystemService],
})
export class starSystemModule {}