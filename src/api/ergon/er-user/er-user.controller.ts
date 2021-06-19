import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ErUserService } from './er-user.service';
import { CreateErUserDto } from './dto/create-er-user.dto';
import { UpdateErUserDto } from './dto/update-er-user.dto';

@Controller('er-user')
export class ErUserController {
  constructor(private readonly erUserService: ErUserService) {}

  @Post()
  create(@Body() createErUserDto: CreateErUserDto) {
    return this.erUserService.create(createErUserDto);
  }

  @Get()
  findAll() {
    return this.erUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.erUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateErUserDto: UpdateErUserDto) {
    return this.erUserService.update(+id, updateErUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.erUserService.remove(+id);
  }
}
