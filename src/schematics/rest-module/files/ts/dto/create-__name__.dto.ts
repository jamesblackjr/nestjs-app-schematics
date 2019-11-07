import { IsNotEmpty } from 'class-validator';

export class Create<%= classify(name) %>Dto {
  @IsNotEmpty()
  name: string;
}
