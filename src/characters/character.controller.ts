import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common";
import { CharacterDto, editCharacterDto } from "src/dto/character.dto";
import { CharacterService } from "./character.service";
import { AuthGuard } from "@nestjs/passport";

@UseGuards(AuthGuard)
@Controller('character')
export class CharacterController{
    constructor(private characterService: CharacterService){}

    @Post('/add')
    async addCharacter(@Body() data: CharacterDto){
        return this.characterService.newCharacter(data)
    }
    @Post('/edit')
    async editCharacter(@Body() data: editCharacterDto){
        return this.characterService.editCharacter(data)
    }

    @Get('/list')
    async getAllCharacters(){
        return this.characterService.listCharacters()
    }

    @Get()
    async getCharacter(@Query('id') id: string){
        return this.characterService.getCharacterById(id)
    }
    @Get('/delete')
    async removeCharacter(@Query('id') id:string){
        return this.characterService.deleteCharacter(id)
    }
} 