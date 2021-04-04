import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateLoyaltyProgramDto } from './dto/create-loyalty-program.dto';
import { UpdateLoyaltyProgramDto } from './dto/update-loyalty-program.dto';
import { LoyaltyProgramService } from './loyalty-program.service';

@Controller('loyalty-program')
export class LoyaltyProgramController {
  constructor(private readonly loyaltyProgramService: LoyaltyProgramService) {}

  @Post()
  create(@Body() createLoyaltyProgramDto: CreateLoyaltyProgramDto) {
    return this.loyaltyProgramService.create(createLoyaltyProgramDto);
  }

  @Get()
  findAll() {
    return this.loyaltyProgramService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loyaltyProgramService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLoyaltyProgramDto: UpdateLoyaltyProgramDto,
  ) {
    return this.loyaltyProgramService.update(+id, updateLoyaltyProgramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loyaltyProgramService.remove(+id);
  }
}
