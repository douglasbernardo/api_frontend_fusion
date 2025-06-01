import { Body, Controller, Get, HttpStatus, Post, Query, Res, UseGuards } from "@nestjs/common";
import { spaceShipService } from "./spaceShip.service";
import { editSpaceShipDto, spaceShipDto } from "src/dto/spaceShip.dto";
import { Response } from 'express';
import { AuthGuard } from '../auth/auth.guard'

@Controller('space-ship')
export class SpaceShipController{
    constructor(private spaceShip: spaceShipService){}

    @UseGuards(AuthGuard)
    @Post('/add')
    async addSpaceShip(@Body() data: spaceShipDto, @Res() res: Response){
        const addedSpaceShip = this.spaceShip.newSpaceShip(data)
        res.status(HttpStatus.ACCEPTED).json({"message":'Space Ship editado com sucesso'})
    }
    @UseGuards(AuthGuard)
    @Post('/edit')
    async editSpaceShip(@Body() data: editSpaceShipDto,@Res() res: Response){
        const editSpaceShip = this.spaceShip.editSpaceShip(data)
        res.status(HttpStatus.ACCEPTED).json({"message":'Space Ship editado com sucesso'})
    }

    @UseGuards(AuthGuard)
    @Get('/list')
    async getSpaceShips(){
        return this.spaceShip.listSpaceShips()
    }
    @Get()
    async getSpaceShip(@Query('id') id: string){
        return this.spaceShip.getSpaceShip(id)
    }
    @UseGuards(AuthGuard)
    @Get('/delete')
    async removeSpaceShip(@Query('id') id: string,@Res() res: Response){
        const deletedSpaceShip =  this.spaceShip.deleteSpaceShip(id)
        res.status(HttpStatus.ACCEPTED).send({"message":'Space Ship deletado com sucesso'})
    }
}