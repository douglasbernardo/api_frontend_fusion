import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common";
import { CharacterService } from "./character.service";
import { AuthGuard } from "../auth/auth.guard";
import { addCharacterDto } from "src/dto/character/addCharacter.dto";
import { editCharacterDto } from "src/dto/character/editCharacter.dto";

@Controller('character')
@UseGuards(AuthGuard)
export class CharacterController{
    constructor(private characterService: CharacterService){}

    @Post('/add')
    async addCharacter(@Body() data: addCharacterDto){
        const addedCharacter = await this.characterService.newCharacter(data)
        return {
            message: 'Personagem criado com sucesso',
            data: addedCharacter
        }
    }
    @Post('/edit')
    async editCharacter(@Body() data: editCharacterDto){
        const editedCharacter = await this.characterService.editCharacter(data)
         return {
            message: 'Personagem editado com sucesso',
            data: editedCharacter
        }
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
        const deletedCharacter = await this.characterService.deleteCharacter(id)
        return {
            message: 'Personagem removido com sucesso',
            data: deletedCharacter
        }
    }
} 