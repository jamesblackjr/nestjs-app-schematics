import { Module } from '@nestjs/common';
import { <%= classify(name) %>sService } from './<%= lowerCase(name) %>s.service';
import { <%= classify(name) %>sResolvers } from './<%= lowerCase(name) %>s.resolvers';

@Module({
	components: [<%= classify(name) %>sService, <%= classify(name) %>sResolvers],
})
export class <%= classify(name) %>sModule {}
