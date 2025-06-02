import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common";
import { starSystemService } from "./starSystem.service";
import { editstarSystemDto, starSystemDto } from "src/dto/starsystem.dto";
import { AuthGuard } from "../auth/auth.guard";

@Controller('star-system')
@UseGuards(AuthGuard)
export class starSystemController{
    constructor(private system: starSystemService) {}

    @Post('/add')
    async newstarSystem(@Body() data: starSystemDto){
        return this.system.addstarSystem(data)
    }
    @Post('/edit')
    async editStarSystem(@Body() data: editstarSystemDto){
        return this.system.editStarSystem(data)
    }
    @Get('/list')
    async getAllStarSystems(){
        return this.system.getAll()
    }
    @Get()
    async getStarSystem(@Query('id') id: string){
        return this.system.getStarSystem(id)
    }
    @Get('/delete')
    async deleteStarSystem(@Query('id') id:string){
        return this.system.deletestarSystem(id)
    }
}