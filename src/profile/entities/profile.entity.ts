import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './../../user/entities/user.entity';
import { GenderEnum } from './../enum/gender.enum';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => User, user => user.profile)
  user: User;

  @Column()
  fullName: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  cpf: string;

  @Column({ nullable: true })
  rg: string;

  @Column({ nullable: true })
  birthDate: Date;

  @Column({ nullable: true })
  img: string;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  district: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  number: number;

  @Column({ nullable: true })
  nickname: string;

  @Column({
    type: 'enum',
    enum: GenderEnum,
    nullable: true,
  })
  gender: GenderEnum;
}
