import { Body, Controller, Get, HttpStatus, Post, Query, Res, UseGuards } from "@nestjs/common";
import { spaceShipService } from "./spaceShip.service";
import { Response } from 'express';
import { AuthGuard } from '../auth/auth.guard'
import { editPlanetDto } from "src/dto/planets/editPlanet.dto";
import { editSpaceShipDto } from "src/dto/spaceShip/editSpaceShip.dto";
import { addSpaceShipDto } from "src/dto/spaceShip/addSpaceShip.dto";

@Controller('space-ship')
@UseGuards(AuthGuard)
export class SpaceShipController{
    constructor(private spaceShip: spaceShipService){}

    @Post('/add')
    async addSpaceShip(@Body() data: addSpaceShipDto){
        const addedSpaceShip = await this.spaceShip.newSpaceShip(data)
        return {
            message: 'Space Ship criada com sucesso',
            data: addedSpaceShip
        }
    }

    @Post('/edit')
    async editSpaceShip(@Body() data: editSpaceShipDto){
        const editedSpaceShip = await this.spaceShip.editSpaceShip(data)
        return {
            message: 'Space Ship editada com sucesso',
            data: editedSpaceShip
        }
    }

    @Get('/list')
    async getSpaceShips(){
        return this.spaceShip.listSpaceShips()
    }
    @Get()
    async getSpaceShip(@Query('id') id: string){
        return await this.spaceShip.getSpaceShip(id)
    }

    @Get('/delete')
    async removeSpaceShip(@Query('id') id: string){
        const deletedSpaceShip = await this.spaceShip.deleteSpaceShip(id)
        return {
            message: 'Space Ship deletada com sucesso',
            data: deletedSpaceShip
        }
    }
}