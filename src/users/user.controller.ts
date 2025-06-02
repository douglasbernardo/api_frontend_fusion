import { Body, Controller, Post, Res } from "@nestjs/common";
import { userService } from "./user.service";
import {Response} from 'express'
import { CreateUserDto } from "src/dto/user/createUser.dto";

@Controller('user')

export class UserController {   

    constructor(private user: userService){}

    @Post('/add')
    async addUser(@Body() data: CreateUserDto,@Res() res: Response){
        const addedUser = this.user.addUser(data)
        return res.status(201).json({
            'message': "Usuário criado com sucesso",
            'user': addedUser
        })
    }
}