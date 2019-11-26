import { Repository, EntityRepository } from 'typeorm';
import { <%= classify(name) %> } from './<%= lowerCase(name) %>.entity';
import { Create<%= classify(name) %>Dto } from './dto/create-<%= lowerCase(name) %>.dto';
import { Get<%= classify(name) %>sFilterDto } from './dto/get-<%= lowerCase(name) %>s-filter.dto';
import { User } from '../auth/user.entity';
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(<%= classify(name) %>)
export class <%= classify(name) %>Repository extends Repository<<%= classify(name) %>> {
  private logger = new Logger('<%= classify(name) %>sRepository');

  async get<%= classify(name) %>s(filterDto: Get<%= classify(name) %>sFilterDto, user: User): Promise<<%= classify(name) %>[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder('<%= lowerCase(name) %>');

    query.where('<%= lowerCase(name) %>.userId = :userId', { userId: user.id });

    if (search) {
      query.andWhere(
        '(<%= lowerCase(name) %>.name LIKE :search)',
        { search: `%${search}%` },
      );
    }

    try {
      const <%= lowerCase(name) %>s = await query.getMany();

      return <%= lowerCase(name) %>s;
    } catch (error) {
      this.logger.error(`Failed to get <%= lowerCase(name) %>s for user "${user.username}", Filters: ${JSON.stringify(filterDto)}`, error.stack);

      throw new InternalServerErrorException();
    }
  }

  async create<%= classify(name) %>(create<%= classify(name) %>Dto: Create<%= classify(name) %>Dto, user: User): Promise<<%= classify(name) %>> {
    const { name } = create<%= classify(name) %>Dto;

    const <%= lowerCase(name) %> = new <%= classify(name) %>();

    <%= lowerCase(name) %>.name = name;
    <%= lowerCase(name) %>.user = user;

    try {
      await <%= lowerCase(name) %>.save();

      delete <%= lowerCase(name) %>.user;

      return <%= lowerCase(name) %>;
    } catch (error) {
      this.logger.error(`Failed to create a <%= lowerCase(name) %> for user "${user.username}", Data: ${JSON.stringify(create<%= classify(name) %>Dto)}`, error.stack);

      throw new InternalServerErrorException();
    }
  }

  async update<%= classify(name) %>(update<%= classify(name) %>Dto: Update<%= classify(name) %>Dto, user: User): Promise<<%= classify(name) %>> {
    const { name } = create<%= classify(name) %>Dto;

    const <%= lowerCase(name) %> = new <%= classify(name) %>();

    <%= lowerCase(name) %>.name = name;

    try {
      await <%= lowerCase(name) %>.save();

      delete <%= lowerCase(name) %>.user;

      return <%= lowerCase(name) %>;
    } catch (error) {
      this.logger.error(`Failed to create a <%= lowerCase(name) %> for user "${user.username}", Data: ${JSON.stringify(update<%= classify(name) %>Dto)}`, error.stack);

      throw new InternalServerErrorException();
    }
  }
}
