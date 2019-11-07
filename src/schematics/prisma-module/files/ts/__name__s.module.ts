import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { <%= classify(name) %>sResolvers } from './<%= lowerCase(name) %>s.resolvers';

@Module({
  imports: [PrismaModule],
  providers: [<%= classify(name) %>sResolvers],
})
export class <%= classify(name) %>sModule {}
