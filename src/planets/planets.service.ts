import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { addPlanetDto } from "src/dto/planets/addPlanet.dto";
import { editPlanetDto } from "src/dto/planets/editPlanet.dto";
import { Planet } from "src/schemas/planet.schema";

@Injectable()
export class PlanetsService{

  constructor(@InjectModel(Planet.name) private planetModel: Model<Planet>){}

  async listPlanets(){
    return this.planetModel.find().exec()
  }
  async newPlanet(data: addPlanetDto){
    const planet = new this.planetModel({
      name: data.name,
      climate: data.climate,
      terrain: data.terrain,
      population: data.population
    })
    return planet.save()
  }
  async editPlanet(data: editPlanetDto){
    const planet = await this.planetModel.findOneAndUpdate(
      {_id: data.id},
      {
        name: data.name,
        climate: data.climate,
        terrain: data.terrain,
        population: data.population
      },
      {new: true}
    )
    return planet
  }
  async getPlanetById(id: string){
    return this.planetModel.findById(id)
  }
  async removePlanet(id:string){
    return this.planetModel.findByIdAndDelete(id)
  }
}