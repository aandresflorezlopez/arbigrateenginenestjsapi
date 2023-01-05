import { Factory, Seeder } from 'typeorm-seeding';
import { DataSource } from 'typeorm';
import { Rates } from '../../rates/rates.entity';

export default class CreateRates implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Rates)
      .values([
        {
          fromCurrency: 'USD',
          toCurrency: 'COP',
          rate: '4900',
        },
        {
          fromCurrency: 'COP',
          toCurrency: 'USD',
          rate: '0.00020',
        },
        {
          fromCurrency: 'COP',
          toCurrency: 'BRL',
          rate: '0.0011',
        },
        {
          fromCurrency: 'BRL',
          toCurrency: 'COP',
          rate: '922',
        },
        {
          fromCurrency: 'BRL',
          toCurrency: 'USD',
          rate: '0.19',
        },
        {
          fromCurrency: 'USD',
          toCurrency: 'BRL',
          rate: '5.39',
        },
      ])
      .execute();
  }
}
