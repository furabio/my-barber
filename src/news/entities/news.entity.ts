import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Group } from './../../group/entities/group.entity';

@Entity()
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  sendDate: Date;

  @ManyToMany(type => Group, group => group.news)
  @JoinTable()
  groups: Group[];

  @Column()
  image: string;
}
