import { <%= classify(name) %> } from './<%= lowerCase(name) %>.entity';

export const <%= lowerCase(name) %>sProviders = [
  {
    provide: '<%= classify(name) %>sRepository',
    useValue: <%= classify(name) %>,
  },
];
