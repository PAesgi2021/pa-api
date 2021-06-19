import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ErSpaceService } from './er-space.service';
import { CreateErSpaceDto } from './dto/create-er-space.dto';
import { UpdateErSpaceDto } from './dto/update-er-space.dto';

@Controller('er-space')
export class ErSpaceController {
  constructor(private readonly erSpaceService: ErSpaceService) {}

  @Post()
  create(@Body() createErSpaceDto: CreateErSpaceDto) {
    return this.erSpaceService.create(createErSpaceDto);
  }

  @Get()
  findAll() {
    return this.erSpaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.erSpaceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateErSpaceDto: UpdateErSpaceDto) {
    return this.erSpaceService.update(+id, updateErSpaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.erSpaceService.remove(+id);
  }
}
