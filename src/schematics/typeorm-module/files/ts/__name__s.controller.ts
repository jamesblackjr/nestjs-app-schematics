import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  UseGuards,
  Logger,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { <%= classify(name) %>sService } from './<%= lowerCase(name) %>s.service';
import { Create<%= classify(name) %>Dto } from './dto/create-<%= lowerCase(name) %>.dto';
import { Get<%= classify(name) %>sFilterDto } from './dto/get-<%= lowerCase(name) %>s-filter.dto';
import { <%= classify(name) %> } from './<%= lowerCase(name) %>.entity';
import { User } from '../auth/user.entity';
import { GetUser } from '../auth/get-user.decorator';

@Controller('<%= lowerCase(name) %>s')
@UseGuards(AuthGuard())
export class <%= classify(name) %>sController {
  private logger = new Logger('<%= classify(name) %>sController');

  constructor(private <%= lowerCase(name) %>sService: <%= classify(name) %>sService) {}

  @Get()
  get<%= classify(name) %>s(
    @Query(ValidationPipe) filterDto: Get<%= classify(name) %>sFilterDto,
    @GetUser() user: User,
  ): Promise<<%= classify(name) %>[]> {
    this.logger.verbose(`User "${user.username}" retreiving all <%= lowerCase(name) %>s. Filters: ${JSON.stringify(filterDto)}`);

    return this.<%= lowerCase(name) %>sService.get<%= classify(name) %>s(filterDto, user);
  }

  @Get('/:id')
  get<%= classify(name) %>ById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<<%= classify(name) %>> {
    return this.<%= lowerCase(name) %>sService.get<%= classify(name) %>ById(id, user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create<%= classify(name) %>(
    @Body() create<%= classify(name) %>Dto: Create<%= classify(name) %>Dto,
    @GetUser() user: User,
  ): Promise<<%= classify(name) %>> {
    this.logger.verbose(`User "${user.username}" creating a new <%= lowerCase(name) %>. Data: ${JSON.stringify(create<%= classify(name) %>Dto)}`);

    return this.<%= lowerCase(name) %>sService.create<%= classify(name) %>(create<%= classify(name) %>Dto, user);
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  update<%= classify(name) %>(
    @Param('id', ParseIntPipe) id: number,
    @Body() update<%= classify(name) %>Dto: Update<%= classify(name) %>Dto,
    @GetUser() user: User,
  ): Promise<<%= classify(name) %>> {
    this.logger.verbose(`User "${user.username}" updating a <%= lowerCase(name) %>. Data: ${JSON.stringify(update<%= classify(name) %>Dto)}`);

    return this.<%= lowerCase(name) %>sService.update<%= classify(name) %>(id, update<%= classify(name) %>Dto, user);
  }

  @Delete('/:id')
  delete<%= classify(name) %>(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.<%= lowerCase(name) %>sService.delete<%= classify(name) %>(id, user);
  }
}
