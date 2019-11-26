import { <%= classify(name) %> } from './<%= name %>.entity';

export const <%= camelize(name) %>sProviders = [
  {
    provide: '<%= classify(name) %>sRepository',
    useValue: <%= classify(name) %>,
  },
];
