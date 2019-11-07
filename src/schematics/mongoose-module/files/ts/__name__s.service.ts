import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { <%= classify(name) %> } from './interfaces/<%= lowerCase(name) %>.interface';
import { Create<%= classify(name) %>Dto } from './dto/create-<%= lowerCase(name) %>.dto';
import { <%= classify(name) %>Schema } from './schemas/<%= lowerCase(name) %>.schema';

@Component()
export class <%= classify(name) %>sService {
  constructor(@InjectModel(<%= classify(name) %>Schema) private readonly <%= lowerCase(name) %>Model: Model<<%= classify(name) %>>) {}

  async create(create<%= classify(name) %>Dto: Create<%= classify(name) %>Dto): Promise<<%= classify(name) %>> {
    const created<%= classify(name) %> = new this.<%= lowerCase(name) %>Model(create<%= classify(name) %>Dto);
    return await created<%= classify(name) %>.save();
  }

  async findAll(): Promise<<%= classify(name) %>[]> {
    return await this.<%= lowerCase(name) %>Model.find().exec();
  }
}
