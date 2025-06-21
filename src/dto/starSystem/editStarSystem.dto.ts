import { IsArray, IsString } from "class-validator";

export class editstarSystemDto{
    @IsString()
    id:string;
    @IsString()
    name:string;
    @IsString()
    description:string;
    @IsArray()
    planetList:Array<string>;
}