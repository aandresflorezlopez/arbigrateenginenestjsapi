import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Arbitrages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  currencyExchange: string;

  @Column()
  amount: string;
}
