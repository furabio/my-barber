import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from './../../service/entities/service.entity';

@Entity()
export class Discount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(type => Service, service => service.discounts)
  service: Service;

  @Column()
  value: string;

  @Column({ default: false })
  codeActive: boolean;

  @Column()
  expirationTime: Date;
}
