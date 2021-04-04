import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from './../../service/entities/service.entity';

@Entity()
export class LoyaltyProgram {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Service, service => service.loyaltyProgram)
  service: Service;

  @Column()
  redeem: number;

  @Column()
  points: number;

  @Column()
  expirationTime: Date;
}
