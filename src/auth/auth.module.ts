import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import * as dotenv from 'dotenv';

import { UsersModule } from '../users/users.module';

import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JWTStrategy } from './strategies/jwt.strategy';
import { AuthController } from './controllers/auth.controller';

dotenv.config();

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET, // env variable,
      signOptions: {
        expiresIn: '10d',
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JWTStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
