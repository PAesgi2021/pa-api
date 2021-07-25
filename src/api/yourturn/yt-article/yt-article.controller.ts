import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { YtArticleService } from './yt-article.service';
import { CreateYtArticleDto } from './dto/create-yt-article.dto';
import { UpdateYtArticleDto } from './dto/update-yt-article.dto';

@Controller('yt-article')
export class YtArticleController {
  constructor(private readonly ytArticleService: YtArticleService) {}

  @Post()
  create(@Body() createYtArticleDto: CreateYtArticleDto) {
    return this.ytArticleService.create(createYtArticleDto);
  }

  @Get()
  findAll() {
    return this.ytArticleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ytArticleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateYtArticleDto: UpdateYtArticleDto,
  ) {
    return this.ytArticleService.update(+id, updateYtArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ytArticleService.remove(+id);
  }
}
