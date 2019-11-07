import { CanActivate, Guard, ExecutionContext } from '@nestjs/common';

@Guard()
export class <%= classify(name) %>sGuard implements CanActivate {
  canActivate(request: any, context: ExecutionContext): boolean {
    return true;
  }
}
