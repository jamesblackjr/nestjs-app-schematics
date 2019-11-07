import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Create<%= classify(name) %>Dto } from './dto/create-<%= lowerCase(name) %>.dto';
import { Get<%= classify(name) %>sFilterDto } from './dto/get-<%= lowerCase(name) %>s-filter.dto';
import { <%= classify(name) %>Repository } from './<%= lowerCase(name) %>.repository';
import { <%= classify(name) %> } from './<%= lowerCase(name) %>.entity';
import { User } from '../auth/user.entity';

@Injectable()
export class <%= classify(name) %>sService {
  constructor(
    @InjectRepository(<%= classify(name) %>Repository)
    private <%= lowerCase(name) %>Repository: <%= classify(name) %>Repository,
  ) {}

  async get<%= classify(name) %>s(filterDto: Get<%= classify(name) %>sFilterDto, user: User): Promise<<%= classify(name) %>[]> {
    return this.<%= lowerCase(name) %>Repository.get<%= classify(name) %>s(filterDto, user);
  }

  async get<%= classify(name) %>ById(id: number, user: User): Promise<<%= classify(name) %>> {
    const found = await this.<%= lowerCase(name) %>Repository.findOne({ where: { id, userId: user.id }});

    if (!found) {
      throw new NotFoundException(`<%= classify(name) %> with ID "${id}" not found`);
    }

    return found;
  }

  async create<%= classify(name) %>(create<%= classify(name) %>Dto: Create<%= classify(name) %>Dto, user: User): Promise<<%= classify(name) %>> {
    return this.<%= lowerCase(name) %>Repository.create<%= classify(name) %>(create<%= classify(name) %>Dto, user);
  }

  async delete<%= classify(name) %>(id: number, user: User): Promise<void> {
    const result = await this.<%= lowerCase(name) %>Repository.delete({ id, userId: user.id });

    if (result.affected === 0) {
      throw new NotFoundException(`<%= classify(name) %> with ID "${id}" not found`);
    }
  }
}
