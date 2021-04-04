import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() user: User) {
    const { email, isActive } = await this.userService.create(user);
    return {
      email,
      isActive,
    };
  }
}
