
import { Component, Inject } from '@nestjs/common';
import { Create<%= classify(name) %>Dto } from './dto/create-<%= name %>.dto';
import { Model } from 'sequelize-typescript';
import { <%= classify(name) %> } from './<%= name %>.entity';

@Component()
export class <%= classify(name) %>sService {
  constructor(
    @Inject('<%= classify(name) %>sRepository') private readonly <%= camelize(name) %>sRepository: typeof <%= classify(name) %>) {}

  async create(create<%= classify(name) %>Dto: Create<%= classify(name) %>Dto): Promise<<%= classify(name) %>> {
    const <%= camelize(name) %> = new <%= classify(name) %>();
    <%= camelize(name) %>.name = create<%= classify(name) %>Dto.name;

    return await <%= camelize(name) %>.save();
  }

  async findAll(): Promise<<%= classify(name) %>[]> {
    return await this.<%= camelize(name) %>sRepository.findAll<<%= classify(name) %>>();
  }
}
