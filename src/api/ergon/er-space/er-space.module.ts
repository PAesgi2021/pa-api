import { Module } from '@nestjs/common';
import { ErSpaceService } from './er-space.service';
import { ErSpaceController } from './er-space.controller';

@Module({
  controllers: [ErSpaceController],
  providers: [ErSpaceService]
})
export class ErSpaceModule {}
