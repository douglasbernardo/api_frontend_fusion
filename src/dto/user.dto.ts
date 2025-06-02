import { Affiliation } from "src/enums/affiliation.enums";
import {IsEmail, IsEnum, IsString} from 'class-validator';

export class UserDto{
    name:string;
    email:string;
    pass:string;

    @IsEnum(Affiliation, { message: 'Afiliação inválida' })
    affiliation: Affiliation;
}

export class LoginUserDto{
    @IsEmail()
    email:string;
    @IsString()
    pass:string;
}
