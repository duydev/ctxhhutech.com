import { Role, Permission, User } from './entities';

export default {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'ctxhhutech',
  logging: true,
  entities: [Role, Permission, User],
  migrations: [__dirname + '/migrations/*.ts'],
  cli: {
    migrationsDir: __dirname + '/migrations',
    entitiesDir: __dirname + '/entities',
  },
  synchronize: false, // auto create tables
};
