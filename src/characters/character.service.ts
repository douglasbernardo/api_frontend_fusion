import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CharacterDto, editCharacterDto } from "src/dto/character.dto";
import { Character } from "src/schemas/character.schema";


@Injectable()
export class CharacterService{
    constructor(
        @InjectModel(Character.name) private characterModel: Model<Character>
    ){}

    async newCharacter(data: CharacterDto){
        const character = new this.characterModel({
            name: data.name,
            race: data.race,
            afiliation: data.afiliation,
            homePlanet: data.homePlanet
        })
        return character.save()
    }
    async getCharacterById(id: string){
        return await this.characterModel.findById(id)
    }
    async deleteCharacter(id:string){
        return await this.characterModel.findOneAndDelete({_id:id})
    }
    async listCharacters(){
        return await this.characterModel.find().exec()
    }
    async editCharacter(data: editCharacterDto){
        return await this.characterModel.findOneAndUpdate(
            {_id: data.id},
            {
                name: data.name,
                race: data.race,
                afiliation: data.afiliation,
                homePlanet: data.homePlanet
            },
            {new: true}
        )
    }
}