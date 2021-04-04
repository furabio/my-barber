import { Schedule } from 'src/schedules/entities/schedule.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DiscountCode } from './../../discount-code/entities/discount-code.entity';
import { Discount } from './../../discount/entities/discount.entity';
import { LoyaltyProgram } from './../../loyalty-program/entities/loyalty-program.entity';
import { ServiceProvider } from './../../service-provider/entities/service-provider.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  descripttion: string;

  @Column()
  value: number;

  @Column()
  time: number;

  @OneToMany(type => Discount, discount => discount.service)
  discounts: Discount[];

  @ManyToMany(type => DiscountCode, discountCode => discountCode.services)
  @JoinTable()
  discountCodes: DiscountCode[];

  @OneToOne(type => LoyaltyProgram, loyaltyProgram => loyaltyProgram.service, {
    nullable: true,
  })
  @JoinColumn()
  loyaltyProgram: LoyaltyProgram;

  @OneToMany(
    type => ServiceProvider,
    serviceProvider => serviceProvider.service,
  )
  serviceProviders: ServiceProvider;

  @ManyToMany(type => Schedule, schedule => schedule.services)
  schedules: Schedule[];
}
