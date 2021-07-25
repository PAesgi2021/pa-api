import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { YtProfileService } from './yt-profile.service';
import { YtCreateProfileDto } from './dto/yt-create-profile.dto';
import { YtUpdateProfileDto } from './dto/yt-update-profile.dto';

@Controller('yt-profile')
export class YtProfileController {
  constructor(private readonly profileService: YtProfileService) {}

  @Post()
  create(@Body() createProfileDto: YtCreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProfileDto: YtUpdateProfileDto,
  ) {
    return this.profileService.update(+id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(+id);
  }
}
