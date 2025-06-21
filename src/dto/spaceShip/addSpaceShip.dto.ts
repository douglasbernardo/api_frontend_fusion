import { IsNumber, IsString } from "class-validator";

export class addSpaceShipDto{
    @IsString()
    name:string;
    @IsString()
    modelType:string;
    @IsString()
    fabricator:string;
    @IsNumber()
    capacityPassenger: number
}
