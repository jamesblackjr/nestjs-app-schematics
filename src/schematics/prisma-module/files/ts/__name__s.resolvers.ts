import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UseRoles } from 'nest-access-control';
import { ACGuard } from '../access/access.guard';
import { AuthGuard } from '../auth/auth.guard';
import { GetUser } from '../auth/get-user.decorator';
import { <%= classify(name) %> } from '../../graphql.schema';
import { BatchPayload } from '../prisma/prisma.binding';
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class <%= classify(name) %>sResolvers {
  constructor(private readonly prisma: PrismaService) {}

  @Query('<%= camelize(name) %>s')
  @UseGuards(AuthGuard, ACGuard)
  @UseRoles({
    resource: '<%= name %>',
    action: 'read',
    possession: 'any',
  })
  async get<%= classify(name) %>s(@Args() args, @Info() info): Promise<<%= classify(name) %>[]> {
    return await this.prisma.query.<%= camelize(name) %>s(args, info);
  }

  @Query('<%= camelize(name) %>')
  @UseGuards(AuthGuard, ACGuard)
  @UseRoles({
    resource: '<%= name %>',
    action: 'read',
    possession: 'any',
  })
  async get<%= classify(name) %>(@Args() args, @Info() info): Promise<<%= classify(name) %>> {
    return await this.prisma.query.<%= camelize(name) %>(args, info);
  }

  @Mutation('create<%= classify(name) %>')
  @UseGuards(AuthGuard, ACGuard)
  @UseRoles({
    resource: '<%= name %>',
    action: 'create',
    possession: 'own',
  })
  async create<%= classify(name) %>(
    @Args() args,
    @Info() info,
    @GetUser() user,
  ): Promise<<%= classify(name) %>> {
    args.data.user = {
      connect: {
        id: user.id,
      },
    };

    return await this.prisma.mutation.create<%= classify(name) %>(args, info);
  }

  @Mutation('update<%= classify(name) %>')
  @UseGuards(AuthGuard, ACGuard)
  @UseRoles({
    resource: '<%= name %>',
    action: 'update',
    possession: 'any',
  })
  async update<%= classify(name) %>(@Args() args, @Info() info): Promise<<%= classify(name) %>> {
    return await this.prisma.mutation.update<%= classify(name) %>(args, info);
  }

  @Mutation('updateMany<%= classify(name) %>s')
  @UseGuards(AuthGuard, ACGuard)
  @UseRoles({
    resource: '<%= name %>',
    action: 'update',
    possession: 'any',
  })
  async updateMany<%= classify(name) %>s(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.updateMany<%= classify(name) %>s(args, info);
  }

  @Mutation('delete<%= classify(name) %>')
  @UseGuards(AuthGuard, ACGuard)
  @UseRoles({
    resource: '<%= name %>',
    action: 'delete',
    possession: 'any',
  })
  async delete<%= classify(name) %>(@Args() args, @Info() info): Promise<<%= classify(name) %>> {
    return await this.prisma.mutation.delete<%= classify(name) %>(args, info);
  }

  @Mutation('deleteMany<%= classify(name) %>s')
  @UseGuards(AuthGuard, ACGuard)
  @UseRoles({
    resource: '<%= name %>',
    action: 'delete',
    possession: 'any',
  })
  async deleteMany<%= classify(name) %>s(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteMany<%= classify(name) %>s(args, info);
  }

  @Subscription('<%= camelize(name) %>')
  @UseGuards(AuthGuard, ACGuard)
  @UseRoles({
    resource: '<%= name %>',
    action: 'read',
    possession: 'any',
  })
  on<%= classify(name) %>Mutation(@Args() args, @Info() info) {
    return this.prisma.subscription.<%= camelize(name) %>(args, info);
  }
}
