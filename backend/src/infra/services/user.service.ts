import { Repository, EntityRepository } from 'typeorm';
import { User } from '../db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  async findAll() {
    return this.UserRepository.find();
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.UserRepository.findOne({ email });
  }
}
