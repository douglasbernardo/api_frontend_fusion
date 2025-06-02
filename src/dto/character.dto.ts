import { IsString } from "class-validator";

export class CharacterDto{
    @IsString()
    name:string;
    @IsString()
    race:string;
    @IsString()
    afiliation:string;
    @IsString()
    homePlanet:string
}

export class editCharacterDto{
    @IsString()
    id: string;
    @IsString()
    name:string;
    @IsString()
    race:string;
    @IsString()
    afiliation:string;
    @IsString()
    homePlanet:string
}