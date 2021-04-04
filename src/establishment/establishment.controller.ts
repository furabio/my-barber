import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Establishment } from './entities/establishment.entity';
import { EstablishmentService } from './establishment.service';

@Controller('establishment')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @Post()
  create(@Body() establishment: Establishment) {
    return this.establishmentService.create(establishment);
  }

  @Get()
  findAll() {
    return this.establishmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.establishmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() establishment: Establishment) {
    return this.establishmentService.update(+id, establishment);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.establishmentService.remove(+id);
  }
}
