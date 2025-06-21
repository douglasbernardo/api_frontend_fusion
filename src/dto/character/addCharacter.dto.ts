import { IsString } from "class-validator";

export class addCharacterDto{
    @IsString()
    name:string;
    @IsString()
    race:string;
    @IsString()
    afiliation:string;
    @IsString()
    homePlanet:string
}
