import { Module } from '@nestjs/common';
import { <%= classify(name) %>sController } from './<%= name %>s.controller';
import { <%= classify(name) %>sService } from './<%= name %>s.service';

@Module({
  controllers: [<%= classify(name) %>sController],
  components: [<%= classify(name) %>sService],
})
export class <%= classify(name) %>sModule {}
