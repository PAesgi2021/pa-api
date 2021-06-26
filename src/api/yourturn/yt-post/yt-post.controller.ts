import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { YtPostService } from './yt-post.service';
import { YtCreateYtPostDto } from './dto/create-yt-post.dto';
import { YtUpdateYtPostDto } from './dto/update-yt-post.dto';


@Controller('yt-post')
export class YtPostController {
  constructor(private readonly ytPostService: YtPostService) {
  }

  @Post()
  create(@Body() createYtPostDto: YtCreateYtPostDto) {
    return this.ytPostService.create(createYtPostDto);
  }

  @Get()
  findAll() {
    return this.ytPostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ytPostService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateYtPostDto: YtUpdateYtPostDto) {
    return this.ytPostService.update(+id, updateYtPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ytPostService.remove(+id);
  }
}
