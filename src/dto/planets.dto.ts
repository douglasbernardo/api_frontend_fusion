import { IsNegative, IsNumber, IsString } from "class-validator";

export class PlanetDto{
    @IsString()
    name:string;
    @IsString()
    climate:string;
    @IsString()
    terrain:string;
    @IsNumber()
    population: number
}

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