import { Controller, Get, UseGuards } from '@nestjs/common';
import { FindRoleUsecase } from '../../usecases/role';
import { AuthGuard } from '@nestjs/passport';

@Controller('roles')
@UseGuards(AuthGuard('jwt'))
export class RoleController {
  constructor(private readonly findRoleUsecase: FindRoleUsecase) {}

  @Get()
  async findAll() {
    return this.findRoleUsecase.execute();
  }
}
