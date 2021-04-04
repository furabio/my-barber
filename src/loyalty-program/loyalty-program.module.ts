import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoyaltyProgram } from './entities/loyalty-program.entity';
import { LoyaltyProgramController } from './loyalty-program.controller';
import { LoyaltyProgramService } from './loyalty-program.service';

@Module({
  imports: [TypeOrmModule.forFeature([LoyaltyProgram])],
  controllers: [LoyaltyProgramController],
  providers: [LoyaltyProgramService],
  exports: [LoyaltyProgramService],
})
export class LoyaltyProgramModule {}
