import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { <%= classify(name) %>sController } from './<%= lowerCase(name) %>s.controller';
import { <%= classify(name) %>Repository } from './<%= lowerCase(name) %>.repository';
import { <%= classify(name) %>sService } from './<%= lowerCase(name) %>s.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([<%= classify(name) %>Repository]),
    AuthModule,
  ],
  controllers: [<%= classify(name) %>sController],
  providers: [<%= classify(name) %>sService],
})
export class <%= classify(name) %>sModule {}
