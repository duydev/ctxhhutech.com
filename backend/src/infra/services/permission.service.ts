import { Repository, EntityRepository } from 'typeorm';
import { Permission } from '../db/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private readonly PermissionRepository: Repository<Permission>,
  ) {}

  async findAll() {
    return this.PermissionRepository.find();
  }
}
