import { Module } from "@nestjs/common";
import { UserModule } from "src/users/user.module";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";


@Module({
    imports: [
        JwtModule.register({
            secret: 'thisisasecret',
            global: true,
            signOptions: {expiresIn: '10m'}
        }),
        UserModule
    ],
    controllers: [AuthController],
    providers: [AuthService]
})

export class AuthModule {}