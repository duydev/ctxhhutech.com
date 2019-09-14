import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UseCasesModule } from '../usecases/usecases.module';
import { InfraModule } from '../infra/infra.module';
import { JwtModule } from '@nestjs/jwt';
import constant from '../constant';

import { LocalStrategy } from './auth/local.strategy';
import { JwtStrategy } from './auth/jwt.strategy';

import { AuthController } from './auth/auth.controller';
import { RoleController } from './role/role.controller';
import { PermissionController } from './permission/permission.controller';

@Module({
  imports: [
    PassportModule,
    UseCasesModule,
    InfraModule,
    JwtModule.register({
      secret: constant.jwtSecret,
      signOptions: { expiresIn: constant.jwtExpiresIn },
    }),
  ],
  providers: [LocalStrategy, JwtStrategy],
  controllers: [AuthController, RoleController, PermissionController],
})
export class DeliveriesModule {}
