import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common";
import { PlanetsService } from "./planets.service";
import { editPlanetDto, PlanetDto } from "src/dto/planets.dto";
import { AuthGuard } from "src/auth/auth.guard";

@UseGuards(AuthGuard)
@Controller('planets')

export class PlanetsController{
    constructor(private planets: PlanetsService){}
    @Get('/list')
    async getPlanets(){
        return this.planets.listPlanets()
    }
    @Get()
    async getPlanet(@Query('id') id: any){                                                           
        return this.planets.getPlanetById(id)
    }

    @Post('/edit')
    async editPlanet(@Body() data: editPlanetDto){
        return this.planets.editPlanet(data)
    }

    @Post('/add')
    async addPlanet(@Body() data: PlanetDto){
        return this.planets.newPlanet(data)
    }

    @Get('/delete')
    async deletePlanet(@Query('id') id: string){
        return this.planets.removePlanet(id)
    }
}