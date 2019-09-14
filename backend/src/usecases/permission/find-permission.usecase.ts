import { Injectable } from '@nestjs/common';
import { PermissionService } from '../../infra/services';

@Injectable()
export class FindPermissionUsecase {
  constructor(private readonly permissionService: PermissionService) {}

  async execute() {
    return this.permissionService.findAll();
  }
}
