import { createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator((data, params): User => {
  if (Array.isArray(params) && params.length) {
    return params[2].req.user;
  } else {
    return params.user;
  }
});
