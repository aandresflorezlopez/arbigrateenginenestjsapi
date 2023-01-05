import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fromCurrency: string;

  @Column()
  toCurrency: string;

  @Column()
  fromRate: string;

  @Column()
  toRate: string;

  @Column({ default: true })
  isActive: boolean;
}
