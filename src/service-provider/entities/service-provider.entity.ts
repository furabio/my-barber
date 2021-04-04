import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from './../../service/entities/service.entity';
import { User } from './../../user/entities/user.entity';

@Entity()
export class ServiceProvider {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user.serviceProviders)
  user: User;

  @ManyToOne(type => Service, service => service.serviceProviders)
  service: Service;

  @Column()
  commission: number;

  @Column()
  time: number;

  @Column()
  value: number;
}
