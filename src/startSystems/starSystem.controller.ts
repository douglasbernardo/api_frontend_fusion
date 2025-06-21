import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common";
import { starSystemService } from "./starSystem.service";
import { AuthGuard } from "../auth/auth.guard";
import { addStarSystemDto } from "src/dto/starSystem/starsystem.dto";
import { editstarSystemDto } from "src/dto/starSystem/editStarSystem.dto";

@Controller('star-system')
@UseGuards(AuthGuard)
export class starSystemController{
    constructor(private system: starSystemService) {}

    @Post('/add')
    async newstarSystem(@Body() data: addStarSystemDto){
        const addedStarSystem = await this.system.addstarSystem(data)
        return {
            message: 'Sistema estelar criado com sucesso',
            data: addedStarSystem
        }
    }
    @Post('/edit')
    async editStarSystem(@Body() data: editstarSystemDto){
        const editedStarSystem = await this.system.editStarSystem(data)
        return {
            message: 'Sistema estelar editado com sucesso',
            data: editedStarSystem
        }
    }
    @Get('/list')
    async getAllStarSystems(){
        return await this.system.getAll()
    }
    @Get()
    async getStarSystem(@Query('id') id: string){
        return await this.system.getStarSystem(id)
    }
    @Get('/delete')
    async deleteStarSystem(@Query('id') id:string){
        const deletedStarSystem = await this.system.deletestarSystem(id)
        return {
            message: 'Sistema estelar deletado com sucesso',
            data: deletedStarSystem
        }
    }
}