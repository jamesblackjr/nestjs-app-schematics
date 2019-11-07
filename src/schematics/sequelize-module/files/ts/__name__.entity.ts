import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class <%= classify(name) %> extends Model<<%= classify(name) %>> {
  @Column
  name: string;
}
