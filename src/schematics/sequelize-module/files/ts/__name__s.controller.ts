import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Create<%= classify(name) %>Dto } from './dto/create-<%= lowerCase(name) %>.dto';
import { <%= classify(name) %>sService } from './<%= lowerCase(name) %>s.service';
import { <%= classify(name) %> } from './<%= lowerCase(name) %>.entity';

@Controller('<%= lowerCase(name) %>s')
export class <%= classify(name) %>sController {
  constructor(private readonly <%= lowerCase(name) %>sService: <%= classify(name) %>sService) {}

  @Post()
  async create(@Body() create<%= classify(name) %>Dto: Create<%= classify(name) %>Dto) {
    await this.<%= lowerCase(name) %>sService.create(create<%= classify(name) %>Dto);
  }

  @Get()
  async findAll(): Promise<<%= classify(name) %>[]> {
    return await this.<%= lowerCase(name) %>sService.findAll();
  }
}
