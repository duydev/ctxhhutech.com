import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import dbConfig from './db/db.config';
import { Role, Permission, User } from './db/entities';
import constant from '../constant';

import services from './services';
import helpers from './helpers';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig as any),
    TypeOrmModule.forFeature([Role, Permission, User]),
    JwtModule.register({
      secret: constant.jwtSecret,
      signOptions: { expiresIn: constant.jwtExpiresIn },
    }),
  ],
  providers: [...services, ...helpers],
  exports: [...services, ...helpers],
})
export class InfraModule {}
