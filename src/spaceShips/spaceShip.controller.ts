import { Body, Controller, Get, HttpStatus, Post, Query, Res, UseGuards } from "@nestjs/common";
import { spaceShipService } from "./spaceShip.service";
import { editSpaceShipDto, spaceShipDto } from "src/dto/spaceShip.dto";
import { Response } from 'express';
import { AuthGuard } from '../auth/auth.guard'

@Controller('space-ship')
@UseGuards(AuthGuard)
export class SpaceShipController{
    constructor(private spaceShip: spaceShipService){}

    @Post('/add')
    async addSpaceShip(@Body() data: spaceShipDto, @Res() res: Response){
        const addedSpaceShip = await this.spaceShip.newSpaceShip(data)
        return {
            message: 'Space Ship criada com sucesso',
            data: addedSpaceShip
        }
    }

    @Post('/edit')
    async editSpaceShip(@Body() data: editSpaceShipDto,@Res() res: Response){
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
    async removeSpaceShip(@Query('id') id: string,@Res() res: Response){
        const deletedSpaceShip = await this.spaceShip.deleteSpaceShip(id)
        return {
            message: 'Space Ship deletada com sucesso',
            data: deletedSpaceShip
        }
    }
}