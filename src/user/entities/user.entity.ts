import { Schedule } from 'src/schedules/entities/schedule.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Establishment } from './../../establishment/entities/establishment.entity';
import { Group } from './../../group/entities/group.entity';
import { Profile } from './../../profile/entities/profile.entity';
import { Role } from './../../role/entities/role.entity';
import { ServiceProvider } from './../../service-provider/entities/service-provider.entity';
import { Workday } from './../../workday/entities/workday.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Profile, profile => profile.user)
  @JoinColumn()
  profile: Profile;

  @ManyToMany(type => Role, role => role.users)
  @JoinTable()
  roles: Role[];

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(type => Group, group => group.users)
  @JoinTable()
  groups: Group[];

  @ManyToOne(type => Establishment, establishment => establishment.users)
  establishment: Establishment;

  @OneToMany(type => ServiceProvider, serviceProvider => serviceProvider.user)
  serviceProviders: ServiceProvider[];

  @OneToMany(type => Workday, workday => workday.user)
  workdays: Workday[];

  @OneToMany(type => Schedule, schedule => schedule.customer)
  scheduleCustomers: Schedule;

  @OneToMany(type => Schedule, schedule => schedule.provider)
  scheduleProviders: Schedule;
}
