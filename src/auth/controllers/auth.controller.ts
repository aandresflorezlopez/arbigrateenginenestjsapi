import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, Req, UseGuards } from '@nestjs/common';

import { User } from '../../users/users.entity';

import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  login(@Req() req: Request) {
    const user = req.user as User;
    const token = this.authService.generateTWT(user);
    return token;
  }
}
