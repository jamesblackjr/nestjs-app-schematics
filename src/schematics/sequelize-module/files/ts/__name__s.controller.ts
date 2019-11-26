import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Create<%= classify(name) %>Dto } from './dto/create-<%= name %>.dto';
import { <%= classify(name) %>sService } from './<%= name %>s.service';
import { <%= classify(name) %> } from './<%= name %>.entity';

@Controller('<%= camelize(name) %>s')
export class <%= classify(name) %>sController {
  constructor(private readonly <%= camelize(name) %>sService: <%= classify(name) %>sService) {}

  @Post()
  async create(@Body() create<%= classify(name) %>Dto: Create<%= classify(name) %>Dto) {
    await this.<%= camelize(name) %>sService.create(create<%= classify(name) %>Dto);
  }

  @Get()
  async findAll(): Promise<<%= classify(name) %>[]> {
    return await this.<%= camelize(name) %>sService.findAll();
  }
}
