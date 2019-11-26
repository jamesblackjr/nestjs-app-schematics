import { Test } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { <%= classify(name) %>sService } from './<%= lowerCase(name) %>s.service';
import { <%= classify(name) %>Repository } from './<%= lowerCase(name) %>.repository';
import { Get<%= classify(name) %>sFilterDto } from './dto/get-<%= lowerCase(name) %>s-filter.dto';

const mockUser = { id: 12, username: 'Test user' };

const mock<%= classify(name) %>Repository = () => ({
  get<%= classify(name) %>s: jest.fn(),
  findOne: jest.fn(),
  create<%= classify(name) %>: jest.fn(),
  delete: jest.fn(),
});

describe('<%= classify(name) %>sService', () => {
  let <%= lowerCase(name) %>sService;
  let <%= lowerCase(name) %>Repository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        <%= classify(name) %>sService,
        { provide: <%= classify(name) %>Repository, useFactory: mock<%= classify(name) %>Repository },
      ],
    }).compile();

    <%= lowerCase(name) %>sService = await module.get<<%= classify(name) %>sService>(<%= classify(name) %>sService);
    <%= lowerCase(name) %>Repository = await module.get<<%= classify(name) %>Repository>(<%= classify(name) %>Repository);
  });

  describe('get<%= classify(name) %>s', () => {
    it('gets all <%= lowerCase(name) %>s from the repository', async () => {
      <%= lowerCase(name) %>Repository.get<%= classify(name) %>s.mockResolvedValue('someValue');

      expect(<%= lowerCase(name) %>Repository.get<%= classify(name) %>s).not.toHaveBeenCalled();

      const filters: Get<%= classify(name) %>sFilterDto = { search: 'Some search query' };
      const result = await <%= lowerCase(name) %>sService.get<%= classify(name) %>s(filters, mockUser);

      expect(<%= lowerCase(name) %>Repository.get<%= classify(name) %>s).toHaveBeenCalled();
      expect(result).toEqual('someValue');
    });
  });

  describe('get<%= classify(name) %>ById', () => {
    it('calls <%= lowerCase(name) %>Repository.findOne() and successfully retrieve and return the <%= lowerCase(name) %>', async () => {
      const mock<%= classify(name) %> = { name: 'Test <%= lowerCase(name) %>' };
      <%= lowerCase(name) %>Repository.findOne.mockResolvedValue(mock<%= classify(name) %>);

      expect(<%= lowerCase(name) %>Repository.findOne).not.toHaveBeenCalled();

      const result = await <%= lowerCase(name) %>sService.get<%= classify(name) %>ById(1, mockUser);

      expect(<%= lowerCase(name) %>Repository.findOne).toHaveBeenCalledWith({
        where: {
          id: 1,
          userId: mockUser.id,
        },
      });

      expect(result).toEqual(mock<%= classify(name) %>);
    });

    it('throws an error as <%= lowerCase(name) %> is not found', () => {
      <%= lowerCase(name) %>Repository.findOne.mockResolvedValue(null);
      expect(<%= lowerCase(name) %>sService.get<%= classify(name) %>ById(1, mockUser)).rejects.toThrow(NotFoundException);
    });
  });

  describe('create<%= classify(name) %>', () => {
    it('calls <%= lowerCase(name) %>Repository.create<%= classify(name) %>() and successfully return the result', async () => {
      <%= lowerCase(name) %>Repository.create<%= classify(name) %>.mockResolvedValue('some<%= classify(name) %>');

      expect(<%= lowerCase(name) %>Repository.create<%= classify(name) %>).not.toHaveBeenCalled();

      const create<%= classify(name) %>Dto = { name: 'Test <%= lowerCase(name) %>' };
      const result = await <%= lowerCase(name) %>sService.create<%= classify(name) %>(create<%= classify(name) %>Dto, mockUser);

      expect(<%= lowerCase(name) %>Repository.create<%= classify(name) %>).toHaveBeenCalledWith(create<%= classify(name) %>Dto, mockUser);
      expect(result).toEqual('some<%= classify(name) %>');
    });
  });

  describe('delete<%= classify(name) %>', () => {
    it('calls <%= lowerCase(name) %>Repository.delete() and returns undefined', async () => {
      <%= lowerCase(name) %>Repository.delete.mockResolvedValue({ affected: 1 });

      expect(<%= lowerCase(name) %>Repository.delete).not.toHaveBeenCalled();

      const result = await <%= lowerCase(name) %>sService.delete<%= classify(name) %>(1, mockUser);

      expect(<%= lowerCase(name) %>Repository.delete).toHaveBeenCalledWith({ id: 1, userId: mockUser.id });
      expect(result).toEqual(undefined);
    });

    it('throws an error as <%= lowerCase(name) %> is not found', () => {
      <%= lowerCase(name) %>Repository.delete.mockResolvedValue({ affected: 0 });

      expect(<%= lowerCase(name) %>sService.delete<%= classify(name) %>(1, mockUser)).rejects.toThrow(NotFoundException);
    });
  });
});
