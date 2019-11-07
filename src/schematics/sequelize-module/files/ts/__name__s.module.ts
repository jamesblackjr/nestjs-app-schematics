import { Module } from '@nestjs/common';
import { <%= classify(name) %>sController } from './<%= lowerCase(name) %>s.controller';
import { <%= classify(name) %>sService } from './<%= lowerCase(name) %>s.service';
import { <%= lowerCase(name) %>sProviders } from './<%= lowerCase(name) %>s.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  modules: [DatabaseModule],
  controllers: [<%= classify(name) %>sController],
  components: [
    <%= classify(name) %>sService,
    ...<%= lowerCase(name) %>sProviders,
  ],
})
export class <%= classify(name) %>sModule {}
