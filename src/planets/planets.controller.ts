import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common";
import { PlanetsService } from "./planets.service";
import { addPlanetDto } from "src/dto/planets/addPlanet.dto";
import { editPlanetDto } from "src/dto/planets/editPlanet.dto";
import { AuthGuard } from "../auth/auth.guard";

@Controller('planets')
@UseGuards(AuthGuard)
export class PlanetsController{
    constructor(private planets: PlanetsService){}
    @Get('/list')
    async getPlanets(){
        return await this.planets.listPlanets()
    }
    @Get()
    async getPlanet(@Query('id') id: any){                                                           
        return await this.planets.getPlanetById(id)
    }

    @Post('/edit')
    async editPlanet(@Body() data: editPlanetDto){
        const editedPlanet = await this.planets.editPlanet(data)
        return {
            message: 'Planeta editado com sucesso',
            data: editedPlanet
        }
    }

    @Post('/add')
    async addPlanet(@Body() data: addPlanetDto){
        const addedPlanet = await this.planets.newPlanet(data)
        return {
            message: 'Planeta adicionado com sucesso',
            data: addedPlanet
        }
    }

    @Get('/delete')
    async deletePlanet(@Query('id') id: string){
        const deletedPlanet = await this.planets.removePlanet(id)
        return {
            message: 'Planeta deletado com sucesso',
            data: deletedPlanet
        }
    }
}