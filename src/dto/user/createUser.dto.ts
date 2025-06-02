import { Affiliation } from "src/enums/affiliation.enums";
import {IsEmail, IsEnum, IsString} from 'class-validator';

export class CreateUserDto{
    @IsString()
    name:string;
    @IsString()
    email:string;
    @IsString()
    pass:string;

    @IsEnum(Affiliation, { message: 'Afiliação inválida' })
    affiliation: Affiliation;
}
