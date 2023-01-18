import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() paylaod: CreateUserDto) {
    return this.usersService.create(paylaod);
  }
}
