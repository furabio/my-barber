import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { ServiceModule } from './service/service.module';
import { EstablishmentModule } from './establishment/establishment.module';
import { DiscountModule } from './discount/discount.module';
import { GroupModule } from './group/group.module';
import { DiscountCodeModule } from './discount-code/discount-code.module';
import { NewsModule } from './news/news.module';
import { LoyaltyProgramModule } from './loyalty-program/loyalty-program.module';
import { ServiceProviderModule } from './service-provider/service-provider.module';
import { WorkdayModule } from './workday/workday.module';
import { SchedulesModule } from './schedules/schedules.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'furabio',
      password: 'furabio',
      database: 'mybarber',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    ProfileModule,
    RoleModule,
    ServiceModule,
    EstablishmentModule,
    DiscountModule,
    GroupModule,
    DiscountCodeModule,
    NewsModule,
    LoyaltyProgramModule,
    ServiceProviderModule,
    WorkdayModule,
    SchedulesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
