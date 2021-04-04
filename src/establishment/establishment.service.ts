import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Establishment } from './entities/establishment.entity';

@Injectable()
export class EstablishmentService {
  constructor(
    @InjectRepository(Establishment)
    private establishmentRepository: Repository<Establishment>,
  ) {}

  async create(model: Establishment): Promise<Establishment> {
    const establishment = this.establishmentRepository.create(model);
    await this.establishmentRepository.save(establishment);
    return establishment;
  }

  findAll(): Promise<Establishment[]> {
    return this.establishmentRepository.find();
  }

  findOne(id: number): Promise<Establishment> {
    return this.establishmentRepository.findOne({ where: { id } });
  }

  update(id: number, model: Establishment) {
    return `This action updates a #${id} establishment`;
  }

  async remove(id: number): Promise<void> {
    await this.establishmentRepository.delete(id);
  }
}
