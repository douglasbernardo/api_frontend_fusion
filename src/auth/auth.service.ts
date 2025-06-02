import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginUserDto } from "src/dto/user/loginUser.dto";
import { userService } from "src/users/user.service";
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt'


@Injectable()
export class AuthService{
    constructor(
        private userService: userService,
        private jwtService: JwtService
    ){}

    async signIn(data: LoginUserDto){
        try {
            const user = await this.userService.findUser(data.email)
            if(!user) throw new UnauthorizedException('usuario não encontrado') 
            const verifyPass = bcrypt.compareSync(data.pass, user.pass)
            if(!verifyPass) throw new UnauthorizedException('Senha inválida') 
            if (!verifyPass) {
                throw new UnauthorizedException('A senha digitada é inválida');
            }
            return {
                user,
                access_token: await this.jwtService.signAsync({
                    sub: user?.email,
                    username: user?.name,
                    affiliation: user?.affiliation
                }),
            };
        } catch (error) {
            console.error('Erro no login:', error);
            throw error
        }
    }
}