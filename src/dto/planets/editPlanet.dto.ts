import { IsNumber, IsString } from "class-validator";

export class editPlanetDto{
    @IsString()
    id: string;
    @IsString()
    name:string;
    @IsString()
    climate:string;
    @IsString()
    terrain:string;
    @IsNumber()
    population:number;
}