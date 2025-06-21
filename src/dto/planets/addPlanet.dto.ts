import { IsNumber, IsString } from "class-validator";

export class addPlanetDto{
    @IsString()
    name:string;
    @IsString()
    climate:string;
    @IsString()
    terrain:string;
    @IsNumber()
    population: number
}
