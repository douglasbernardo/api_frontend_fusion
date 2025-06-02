import { Body, Controller, Post } from "@nestjs/common";
import { LoginUserDto } from "src/dto/user.dto";
import { AuthService } from "./auth.service";


@Controller('auth')

export class AuthController{
    constructor(private authService: AuthService){}

    @Post('/login')
    async login(@Body() data: LoginUserDto){
        return this.authService.signIn(data)
    }
}