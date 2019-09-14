import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Role } from './Role.entity';

@Entity({ name: 'permissions' })
export class Permission {
  @PrimaryColumn({ type: 'varchar', length: 100, nullable: false })
  code: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @ManyToMany(type => Role)
  @JoinTable()
  roles: Role[];
}
