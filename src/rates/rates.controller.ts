import { Controller, Get, UseGuards } from '@nestjs/common';
import { Rates } from './rates.entity';
import { RatesService } from './rates.service';

import { ApiKeyGuard } from '../auth/guards/api-key.guard';

import { AuthGuard } from '@nestjs/passport';

import { Role } from 'src/auth/decorators/roles.decorator';
import { Roles } from 'src/auth/models/roles.model';

@UseGuards(ApiKeyGuard)
@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Role(Roles.ADMIN)
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getRates(): Promise<Rates[]> {
    return await this.ratesService.findAll();
  }
}
