import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rates } from './rates.entity';

@Injectable()
export class RatesService {
  constructor(
    @InjectRepository(Rates)
    private ratesRepository: Repository<Rates>,
  ) {}

  findAll(): Promise<Rates[]> {
    return this.ratesRepository.find();
  }

  findOne({ fromCurrency, toCurrency }): Promise<Rates[]> {
    return this.ratesRepository.find({
      where: {
        fromCurrency,
        toCurrency,
      },
    });
  }

  async remove(id: string): Promise<void> {
    await this.ratesRepository.delete(id);
  }
}
