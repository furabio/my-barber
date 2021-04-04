import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { News } from './../../news/entities/news.entity';
import { User } from './../../user/entities/user.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToMany(type => User, user => user.groups)
  users: User[];

  @ManyToMany(type => News, news => news.groups)
  news: News[];
}
