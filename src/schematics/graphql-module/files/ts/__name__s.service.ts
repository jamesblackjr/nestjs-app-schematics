import { Component } from '@nestjs/common';
import { <%= classify(name) %> } from './interfaces/<%= lowerCase(name) %>.interface';

@Component()
export class <%= classify(name) %>sService {
  private readonly <%= lowerCase(name) %>s: <%= classify(name) %>[] = [
    { id: 1, name: '<%= classify(name) %>' },
  ];

  create(<%= lowerCase(name) %>: <%= classify(name) %>) {
    this.<%= lowerCase(name) %>s.push(<%= lowerCase(name) %>);
  }

  findAll(): <%= classify(name) %>[] {
    return this.<%= lowerCase(name) %>s;
  }

  findOneById(id: number): <%= classify(name) %> {
    return this.<%= lowerCase(name) %>s.find((<%= lowerCase(name) %>) => <%= lowerCase(name) %>.id === id);
  }
}
