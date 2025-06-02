import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { userService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, userSchema } from "src/schemas/user.schema";
import { JwtModule } from "@nestjs/jwt";


@Module({
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: userSchema}]),
        JwtModule.register({
            global: true,
            secret: 'thisisasecret',
            signOptions: {expiresIn: '2'}
        })
    ],
    controllers: [UserController],
    exports: [userService],
    providers: [userService],
})

export class UserModule {}