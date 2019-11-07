import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { User } from '../auth/user.entity';

@Entity()
export class <%= classify(name) %> extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /*
   * TODO: Insert Your <%= classify(name) %> Entity Columns/Data Schema
   */

  @Column()
  name: string;

  @ManyToOne(type => User, user => user.<%= lowerCase(name) %>s, { eager: false })
  user: User;

  @Column()
  userId: number;
}
