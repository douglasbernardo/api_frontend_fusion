import { Body, Controller, Post, Res } from "@nestjs/common";
import { userService } from "./user.service";
import {Response} from 'express'
import { CreateUserDto } from "src/dto/user/createUser.dto";

@Controller('user')

export class UserController {   

    constructor(private user: userService){}

    @Post('/add')
    async addUser(@Body() data: CreateUserDto){
        const addedUser = await this.user.addUser(data)
        return {
            'message': "Usuário criado com sucesso",
            'user': addedUser
        }
    }
}