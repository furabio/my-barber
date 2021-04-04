import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './../../user/entities/user.entity';
import { DaysEnum } from './../enum/days.enum';

@Entity()
export class Workday {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  day: DaysEnum;

  @Column()
  entryTime: Date;

  @Column()
  departureTime: Date;

  @Column()
  secondEntryTime: Date;

  @Column()
  secondDepartureTime: Date;

  @ManyToOne(type => User, user => user.workdays)
  user: User;
}
