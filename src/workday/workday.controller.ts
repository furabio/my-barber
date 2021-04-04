import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateWorkdayDto } from './dto/create-workday.dto';
import { UpdateWorkdayDto } from './dto/update-workday.dto';
import { WorkdayService } from './workday.service';

@Controller('workday')
export class WorkdayController {
  constructor(private readonly workdayService: WorkdayService) {}

  @Post()
  create(@Body() createWorkdayDto: CreateWorkdayDto) {
    return this.workdayService.create(createWorkdayDto);
  }

  @Get()
  findAll() {
    return this.workdayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workdayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkdayDto: UpdateWorkdayDto) {
    return this.workdayService.update(+id, updateWorkdayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workdayService.remove(+id);
  }
}
