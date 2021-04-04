import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workday } from './entities/workday.entity';
import { WorkdayController } from './workday.controller';
import { WorkdayService } from './workday.service';

@Module({
  imports: [TypeOrmModule.forFeature([Workday])],
  controllers: [WorkdayController],
  providers: [WorkdayService],
  exports: [WorkdayService],
})
export class WorkdayModule {}
