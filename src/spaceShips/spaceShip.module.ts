import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { spaceShip, spaceShipSchema } from "src/schemas/spaceShips.schema";
import { SpaceShipController } from "./spaceShip.controller";
import { spaceShipService } from "./spaceShip.service";
import { AuthModule } from "src/auth/auth.module";


@Module({
    imports:[
        MongooseModule.forFeature([{name: spaceShip.name, schema: spaceShipSchema}]),
        AuthModule,
    ],
    controllers:[SpaceShipController],
    exports: [spaceShipService],
    providers:[spaceShipService]
})

export class spaceShipModule {}