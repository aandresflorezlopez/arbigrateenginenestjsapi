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
          fromCurrency: 'COP',
          toCurrency: 'USD',
          fromRate: '4900',
          toRate: '0,00020',
        },
        {
          fromCurrency: 'EUR',
          toCurrency: 'USD',
          fromRate: '0,741',
          toRate: '1,1586',
        },
        {
          fromCurrency: 'EUR',
          toCurrency: 'GBP',
          fromRate: '0,888',
          toRate: '1,4600',
        },
        {
          fromCurrency: 'GBP',
          toCurrency: 'USD',
          fromRate: '1,6000',
          toRate: '0,666',
        },
      ])
      .execute();
  }
}
