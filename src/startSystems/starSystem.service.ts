import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { editstarSystemDto } from "src/dto/starSystem/editStarSystem.dto";
import { addStarSystemDto } from "src/dto/starSystem/starsystem.dto";
import { starSystem } from "src/schemas/starSystems.schema";


@Injectable()
export class starSystemService {
    constructor(@InjectModel(starSystem.name) private starSystem: Model<starSystem>) {}

    async addstarSystem(data: addStarSystemDto){
        const system = new this.starSystem({
            name: data.name,
            description: data.description,
            planetList: data.planetList
        })
        return system.save()
    }
    async getStarSystem(id:string){
        return this.starSystem.findById(id)
    }
    async getAll(){
        return await this.starSystem.find().exec()
    }
    async deletestarSystem(id:string){
        return this.starSystem.findOneAndDelete({_id: id})
    }
    async editStarSystem(data: editstarSystemDto){
        const system = await this.starSystem.findOneAndUpdate(
            {_id: data.id},
            {
                name: data.name,
                description: data.description,
                planetList: data.planetList
            },
            {new: true}
        )
    }
}