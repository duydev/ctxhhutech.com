import { Controller, Get, UseGuards } from '@nestjs/common';
import { FindPermissionUsecase } from '../../usecases/permission';
import { AuthGuard } from '@nestjs/passport';

@Controller('permissions')
@UseGuards(AuthGuard('jwt'))
export class PermissionController {
  constructor(private readonly findPermissionUsecase: FindPermissionUsecase) {}

  @Get()
  async findAll() {
    return this.findPermissionUsecase.execute();
  }
}
