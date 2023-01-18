import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { User } from '../../users/users.entity';

import { UsersService } from '../../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOneByEmail(username);
    console.log({ user, username, password });
    if (!user) {
      return null;
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (isPasswordMatched) {
      return user;
    }
    return null;
  }

  generateTWT(user: User) {
    const payload = { sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
