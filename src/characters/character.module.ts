import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Character, characterSchema } from "src/schemas/character.schema";
import { CharacterService } from "./character.service";
import { CharacterController } from "./character.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Character.name, schema: characterSchema}])
  ],
  controllers: [CharacterController],
  exports: [CharacterService],
  providers: [CharacterService],
})
export class CharacterModule {}