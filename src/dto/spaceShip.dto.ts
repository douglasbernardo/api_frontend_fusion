import { IsNumber, IsString } from "class-validator";

export class spaceShipDto{
    @IsString()
    name:string;
    @IsString()
    modelType:string;
    @IsString()
    fabricator:string;
    @IsNumber()
    capacityPassenger: number
}

export class editSpaceShipDto{
    @IsString()
    id: string;
    @IsString()
    name:string;
    @IsNumber()
    modelType:string;
    @IsNumber()
    fabricator:string;
    @IsNumber()
    capacityPassenger:number;
}