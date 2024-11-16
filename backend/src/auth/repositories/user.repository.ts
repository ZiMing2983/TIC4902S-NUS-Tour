import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({ where: { email } });
    return user ?? undefined;
  }

  async createUser(
    email: string,
    password: string,
    role: string = 'user',
  ): Promise<User> {
    const user = this.create({ email, password, role });
    return this.save(user);
  }
}
