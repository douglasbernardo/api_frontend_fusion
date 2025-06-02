import { Body, Controller, Post, Res } from "@nestjs/common";
import { userService } from "./user.service";
import { LoginUserDto, UserDto } from "src/dto/user.dto";
import {Response} from 'express'

@Controller('user')

export class UserController {   

    constructor(private user: userService){}

    @Post('/add')
    async addUser(@Body() data: UserDto,@Res() res: Response){
        const addedUser = this.user.addUser(data)
        return res.status(201).json({
            'message': "Usuário criado com sucesso",
            'user': addedUser
        })
    }
}