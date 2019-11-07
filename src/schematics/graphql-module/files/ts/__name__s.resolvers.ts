import { Component, UseGuards } from '@nestjs/common';
import {
  Query,
  Mutation,
  Resolver,
  DelegateProperty,
} from '@nestjs/graphql';

import { <%= classify(name) %> } from './interfaces/<%= lowerCase(name) %>.interface';
import { <%= classify(name) %>sService } from './<%= lowerCase(name) %>s.service';
import { <%= classify(name) %>sGuard } from './<%= lowerCase(name) %>s.guard';
import { MergeInfo } from 'graphql-tools/dist/Interfaces';

@Resolver('<%= classify(name) %>')
export class <%= classify(name) %>sResolvers {
  constructor(private readonly <%= lowerCase(name) %>sService: <%= classify(name) %>sService) {}

  @Query()
  @UseGuards(<%= classify(name) %>sGuard)
  async get<%= classify(name) %>s() {
    return await this.<%= lowerCase(name) %>sService.findAll();
  }

  @Query('<%= lowerCase(name) %>')
  async findOneById(id: number) {
    return await this.<%= lowerCase(name) %>sService.findOneById(id);
  }

  @Mutation('create<%= classify(name) %>')
  async create(<%= lowerCase(name) %>: <%= classify(name) %>) {
    await this.<%= lowerCase(name) %>sService.create(<%= lowerCase(name) %>);
  }

  @DelegateProperty('user')
  findUsersById(<%= lowerCase(name) %>: <%= classify(name) %>) {
    return (mergeInfo: MergeInfo) => ({
      fragment: `fragment <%= classify(name) %>Fragment on <%= classify(name) %> { userId }`,
      resolve(parent, args, context, info) {
        const userId = parent.id;
        return mergeInfo.delegate(
          'query',
          'userById',
          {
            id: userId,
          },
          context,
          info,
        );
      },
    });
  }
}
