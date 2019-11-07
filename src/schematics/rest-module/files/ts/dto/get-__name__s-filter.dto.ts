import { IsOptional, IsNotEmpty } from 'class-validator';

export class Get<%= classify(name) %>sFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
