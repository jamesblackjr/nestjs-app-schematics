import { Module } from '@nestjs/common';
import { <%= classify(name) %>sController } from './<%= name %>s.controller';
import { <%= classify(name) %>sService } from './<%= name %>s.service';
import { <%= camelize(name) %>sProviders } from './<%= name %>s.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  modules: [DatabaseModule],
  controllers: [<%= classify(name) %>sController],
  components: [
    <%= classify(name) %>sService,
    ...<%= camelize(name) %>sProviders,
  ],
})
export class <%= classify(name) %>sModule {}
