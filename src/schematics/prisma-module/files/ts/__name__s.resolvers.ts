import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { <%= classify(name) %> } from '../../graphql.schema';
import { BatchPayload } from '../prisma/prisma.binding';
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class <%= classify(name) %>sResolvers {
  constructor(private readonly prisma: PrismaService) {}

  @Query('<%= lowerCase(name) %>s')
  @UseGuards(AuthGuard)
  async get<%= classify(name) %>s(@Args() args, @Info() info): Promise<<%= classify(name) %>[]> {
    return await this.prisma.query.<%= lowerCase(name) %>s(args, info);
  }

  @Query('<%= lowerCase(name) %>')
  @UseGuards(AuthGuard)
  async get<%= classify(name) %>(@Args() args, @Info() info): Promise<<%= classify(name) %>> {
    return await this.prisma.query.<%= lowerCase(name) %>(args, info);
  }

  @Mutation('create<%= classify(name) %>')
  @UseGuards(AuthGuard)
  async create<%= classify(name) %>(@Args() args, @Info() info): Promise<<%= classify(name) %>> {
    return await this.prisma.mutation.create<%= classify(name) %>(args, info);
  }

  @Mutation('update<%= classify(name) %>')
  @UseGuards(AuthGuard)
  async update<%= classify(name) %>(@Args() args, @Info() info): Promise<<%= classify(name) %>> {
    return await this.prisma.mutation.update<%= classify(name) %>(args, info);
  }

  @Mutation('updateMany<%= classify(name) %>s')
  @UseGuards(AuthGuard)
  async updateMany<%= classify(name) %>s(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.updateMany<%= classify(name) %>s(args, info);
  }

  @Mutation('delete<%= classify(name) %>')
  @UseGuards(AuthGuard)
  async delete<%= classify(name) %>(@Args() args, @Info() info): Promise<<%= classify(name) %>> {
    return await this.prisma.mutation.delete<%= classify(name) %>(args, info);
  }

  @Mutation('deleteMany<%= classify(name) %>s')
  @UseGuards(AuthGuard)
  async deleteMany<%= classify(name) %>s(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteMany<%= classify(name) %>s(args, info);
  }

  @Subscription('<%= lowerCase(name) %>')
  @UseGuards(AuthGuard)
  on<%= classify(name) %>Mutation(@Args() args, @Info() info) {
    return this.prisma.subscription.<%= lowerCase(name) %>(args, info);
  }
}
