import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from './../../service/entities/service.entity';

@Entity()
export class DiscountCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  code: string;

  @ManyToMany(type => Service, service => service.discountCodes)
  services: Service[];

  @Column()
  value: number;

  @Column()
  expirationTime: Date;
}
