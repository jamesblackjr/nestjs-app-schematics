import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { <%= classify(name) %> } from './interfaces/<%= name %>.interface';
import { Create<%= classify(name) %>Dto } from './dto/create-<%= name %>.dto';
import { <%= classify(name) %>Schema } from './schemas/<%= name %>.schema';

@Component()
export class <%= classify(name) %>sService {
  constructor(@InjectModel(<%= classify(name) %>Schema) private readonly <%= camelize(name) %>Model: Model<<%= classify(name) %>>) {}

  async create(create<%= classify(name) %>Dto: Create<%= classify(name) %>Dto): Promise<<%= classify(name) %>> {
    const created<%= classify(name) %> = new this.<%= camelize(name) %>Model(create<%= classify(name) %>Dto);
    return await created<%= classify(name) %>.save();
  }

  async findAll(): Promise<<%= classify(name) %>[]> {
    return await this.<%= camelize(name) %>Model.find().exec();
  }
}
