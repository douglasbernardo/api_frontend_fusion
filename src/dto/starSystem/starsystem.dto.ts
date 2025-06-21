import { IsArray, IsString } from "class-validator";

export class addStarSystemDto{
    @IsString()
    name:string;
    @IsString()
    description:string;
    @IsArray()
    planetList:Array<string>;
}