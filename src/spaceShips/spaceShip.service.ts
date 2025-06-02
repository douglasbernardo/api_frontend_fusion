import { BadRequestException, HttpStatus, Injectable, NotFoundException, Res } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Response } from "express";
import { isValidObjectId, Model } from "mongoose";
import { editSpaceShipDto, spaceShipDto } from "src/dto/spaceShip.dto";
import { spaceShip } from "src/schemas/spaceShips.schema";


@Injectable()
export class spaceShipService{
    constructor(@InjectModel(spaceShip.name) private spaceShip: Model<spaceShip>){}

    async newSpaceShip(data: spaceShipDto){
        const spaceship = new this.spaceShip({
            name: data.name,
            modelType: data.modelType,
            fabricator: data.fabricator,
            capacityPassenger: data.capacityPassenger
        })
        return spaceship.save()
    }
    async listSpaceShips(){
        return this.spaceShip.find().exec()
    }
    async getSpaceShip(id: string){
        if (!isValidObjectId(id)) {
            throw new BadRequestException('ID inválido');
        }

        const ship = await this.spaceShip.findOne({ _id: id });
        if (!ship) {
            throw new NotFoundException('Spaceship not found');
        }

        return ship;
    }

    async editSpaceShip(data: editSpaceShipDto){
        const existsSpaceShip = await this.getSpaceShip(data.id)
        if(!existsSpaceShip){
            throw new NotFoundException('Spaceship not found');
        }
        const spaceShip = await this.spaceShip.findOneAndUpdate(
            {_id: data.id},
            {
                name: data.name,
                modelType: data.modelType,
                fabricator: data.fabricator,
                capacityPassenger: data.capacityPassenger
            },
            {new: true}
        )
    }

    async deleteSpaceShip(id: string){
        const existsSpaceShip = await this.getSpaceShip(id)
        if(!existsSpaceShip){
            throw new NotFoundException('Spaceship not found');
        }
        return this.spaceShip.findByIdAndDelete(id)
    }

}