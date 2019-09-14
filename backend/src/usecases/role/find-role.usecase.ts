import { Injectable } from '@nestjs/common';
import { RoleService } from '../../infra/services';

@Injectable()
export class FindRoleUsecase {
  constructor(private readonly roleService: RoleService) {}

  async execute() {
    return this.roleService.findAll();
  }
}
