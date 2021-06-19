import { Module } from '@nestjs/common';
import { ErUserService } from './er-user.service';
import { ErUserController } from './er-user.controller';

@Module({
  controllers: [ErUserController],
  providers: [ErUserService]
})
export class ErUserModule {}
