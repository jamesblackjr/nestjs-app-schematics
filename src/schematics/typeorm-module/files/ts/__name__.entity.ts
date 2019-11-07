import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { User } from '../auth/user.entity';

@Entity()
export class <%= classify(name) %> extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @ManyToOne(type => User, user => user.<%= lowerCase(name) %>s, { eager: false })
  user: User;

  @Column()
  userId: number;
}
