import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Arbitrages } from './arbitrages.entity';

@Injectable()
export class RatesService {
  constructor(
    @InjectRepository(Arbitrages)
    private ratesRepository: Repository<Arbitrages>,
  ) {}

  findAll(): Promise<Arbitrages[]> {
    return this.ratesRepository.find();
  }

  findOne(id: number): Promise<Arbitrages> {
    return this.ratesRepository.findOneBy({ id });
  }
}
