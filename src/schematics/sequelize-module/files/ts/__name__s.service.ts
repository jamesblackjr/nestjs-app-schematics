
import { Component, Inject } from '@nestjs/common';
import { Create<%= classify(name) %>Dto } from './dto/create-<%= lowerCase(name) %>.dto';
import { Model } from 'sequelize-typescript';
import { <%= classify(name) %> } from './<%= lowerCase(name) %>.entity';

@Component()
export class <%= classify(name) %>sService {
  constructor(
    @Inject('<%= classify(name) %>sRepository') private readonly <%= lowerCase(name) %>sRepository: typeof <%= classify(name) %>) {}

  async create(create<%= classify(name) %>Dto: Create<%= classify(name) %>Dto): Promise<<%= classify(name) %>> {
    const <%= lowerCase(name) %> = new <%= classify(name) %>();
    <%= lowerCase(name) %>.name = create<%= classify(name) %>Dto.name;

    return await <%= lowerCase(name) %>.save();
  }

  async findAll(): Promise<<%= classify(name) %>[]> {
    return await this.<%= lowerCase(name) %>sRepository.findAll<<%= classify(name) %>>();
  }
}
