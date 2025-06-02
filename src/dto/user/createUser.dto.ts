import { Affiliation } from "src/enums/affiliation.enums";
import {IsEnum, IsString} from 'class-validator';

export class CreateUserDto{
    @IsString()
    name:string;
    email:string;
    pass:string;

    @IsEnum(Affiliation, { message: 'Afiliação inválida' })
    affiliation: Affiliation;
}
