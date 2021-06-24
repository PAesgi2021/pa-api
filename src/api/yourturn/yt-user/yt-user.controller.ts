import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { YtUserService } from './yt-user.service';
import { CreateYtUserDto } from './dto/create-yt-user.dto';
import { UpdateYtUserDto } from './dto/update-yt-user.dto';

@Controller('yt-user')
export class YtUserController {
  constructor(private readonly ytUserService: YtUserService) {}

  @Post()
  create(@Body() createYtUserDto: CreateYtUserDto) {
    return this.ytUserService.create(createYtUserDto);
  }

  @Get()
  findAll() {
    return this.ytUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ytUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateYtUserDto: UpdateYtUserDto) {
    return this.ytUserService.update(+id, updateYtUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ytUserService.remove(+id);
  }
}
