import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
import { Permission } from './Permission.entity';

@Entity({ name: 'roles' })
export class Role {
  @PrimaryColumn({ type: 'varchar', length: 100, nullable: false })
  code: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @ManyToMany(type => Permission)
  @JoinTable()
  permissions: Permission[];
}
