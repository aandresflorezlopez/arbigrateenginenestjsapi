import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/users.dto';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';

import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(data: CreateUserDto) {
    const newUser = this.userRepo.create(data);
    const hashPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPassword;

    return this.userRepo.save(newUser);
  }

  async findOneByEmail(email: string) {
    const user = await this.userRepo.findOne({ where: { email } });
    const users = await this.userRepo.findOneOrFail({ where: { email } });
    console.log({ user, email, users });
    return user;
  }
}
