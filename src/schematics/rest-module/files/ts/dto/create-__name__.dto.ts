import { IsNotEmpty } from 'class-validator';

export class Create<%= classify(name) %>Dto {
  /*
   * TODO: Insert Create <%= classify(name) %> Entity DTO
   */

  @IsNotEmpty()
  name: string;
}
