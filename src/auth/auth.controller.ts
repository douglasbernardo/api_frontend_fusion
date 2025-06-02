import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "src/dto/user/loginUser.dto";


@Controller('auth')

export class AuthController{
    constructor(private authService: AuthService){}

    @Post('/login')
    async login(@Body() data: LoginUserDto){
        return this.authService.signIn(data)
    }
}