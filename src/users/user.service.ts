import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/user.schema";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/dto/user/createUser.dto";

@Injectable()
export class userService {
    constructor(
        @InjectModel(User.name) private user: Model<User>,
    ){}

    async addUser(data: CreateUserDto){
        const passHash = await bcrypt.hash(data.pass,12)
        const user = new this.user({
            name: data.name,
            email: data.email,
            pass:  passHash,
            affiliation: data.affiliation
        })
        return user.save()
    }
    async findUser(email: string){
       return this.user.findOne({email: email})
    }
}