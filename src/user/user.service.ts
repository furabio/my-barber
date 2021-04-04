import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private readonly fields: any = ['id', 'email', 'isActive'];

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find({ select: this.fields });
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne({
      select: this.fields,
      where: {
        id,
      },
    });
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async create(model: User): Promise<User> {
    const user = this.userRepository.create(model);
    user.password = await bcrypt.hash(user.password, await bcrypt.genSalt());
    await this.userRepository.save(user);
    return user;
  }
}
