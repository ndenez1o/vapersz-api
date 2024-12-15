import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/user/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const user = this.usersService.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  @Post()
  async create(@Body() body: CreateUserDto) {
    try {
      return await this.usersService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new Error('User already exists');
      }

      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const user = await this.usersService.delete(id);
    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CreateUserDto) {
    const user = await this.usersService.update(id, body);
    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
