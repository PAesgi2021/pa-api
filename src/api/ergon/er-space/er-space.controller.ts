import {Controller, Get, Post, Body, Patch, Param, Delete, Logger} from '@nestjs/common';
import { ErSpaceService } from './er-space.service';
import { ErSpaceDTO } from './dto/er-space.dto';
import { UpdateErSpaceDto } from './dto/update-er-space.dto';
import {ErSpaceListDTO} from "./dto/er-spacelist.dto";

@Controller('er-space')
export class ErSpaceController {
  constructor(private readonly erSpaceService: ErSpaceService) {}

  @Post("/save")
  create(@Body() erSpaceDto: ErSpaceDTO) {
    console.log("post space")
    return this.erSpaceService.create(erSpaceDto);
  }

  @Get()
  findAll(): Promise<ErSpaceListDTO> {
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
