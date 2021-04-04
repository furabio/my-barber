import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Service } from './../../service/entities/service.entity';
import { User } from './../../user/entities/user.entity';
import { ScheduleStatusEnum } from './../enum/schedule-status.enum';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user.scheduleCustomers)
  customer: User;

  @ManyToOne(type => User, user => user.scheduleProviders)
  provider: User;

  @Column()
  datetime: Date;

  @Column()
  status: ScheduleStatusEnum;

  @ManyToMany(type => Service, service => service.schedules)
  @JoinTable()
  services: Service[];
}
