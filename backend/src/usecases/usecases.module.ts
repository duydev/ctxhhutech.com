import { Module } from '@nestjs/common';

import { InfraModule } from '../infra/infra.module';

import { FindRoleUsecase } from './role';
import { FindPermissionUsecase } from './permission';

@Module({
  imports: [InfraModule],
  providers: [FindRoleUsecase, FindPermissionUsecase],
  exports: [FindRoleUsecase, FindPermissionUsecase],
})
export class UseCasesModule {}
