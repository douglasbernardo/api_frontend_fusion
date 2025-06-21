import { IsNumber, IsString } from "class-validator";

export class editSpaceShipDto{
    @IsString()
    id: string;
    @IsString()
    name:string;
    @IsString()
    modelType:string;
    @IsString()
    fabricator:string;
    @IsNumber()
    capacityPassenger:number;
}