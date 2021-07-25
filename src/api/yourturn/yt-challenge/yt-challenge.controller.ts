import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { YtChallengeService } from './yt-challenge.service';
import { CreateYtChallengeDto } from './dto/create-yt-challenge.dto';
import { UpdateYtChallengeDto } from './dto/update-yt-challenge.dto';

@Controller('yt-challenge')
export class YtChallengeController {
  constructor(private readonly ytChallengeService: YtChallengeService) {}

  @Post()
  create(@Body() createYtChallengeDto: CreateYtChallengeDto) {
    return this.ytChallengeService.create(createYtChallengeDto);
  }

  @Get()
  findAll() {
    return this.ytChallengeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ytChallengeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateYtChallengeDto: UpdateYtChallengeDto,
  ) {
    return this.ytChallengeService.update(+id, updateYtChallengeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ytChallengeService.remove(+id);
  }
}
