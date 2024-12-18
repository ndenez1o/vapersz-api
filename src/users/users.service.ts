import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/user/create-user.dto';
import { UpdateUserDto } from 'src/dto/user/update-user.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  findAll() {
    return this.userModel.find();
  }

  async create(createUser: CreateUserDto) {
    const newUser = new this.userModel(createUser);
    return await newUser.save();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

  async update(id: string, createUser: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, createUser, { new: true });
  }
}
