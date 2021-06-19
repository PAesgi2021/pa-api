import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ErTodolistService } from './er-todolist.service';
import { CreateErTodolistDto } from './dto/create-er-todolist.dto';
import { UpdateErTodolistDto } from './dto/update-er-todolist.dto';

@Controller('er-todolist')
export class ErTodolistController {
  constructor(private readonly erTodolistService: ErTodolistService) {}

  @Post()
  create(@Body() createErTodolistDto: CreateErTodolistDto) {
    return this.erTodolistService.create(createErTodolistDto);
  }

  @Get()
  findAll() {
    return this.erTodolistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.erTodolistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateErTodolistDto: UpdateErTodolistDto) {
    return this.erTodolistService.update(+id, updateErTodolistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.erTodolistService.remove(+id);
  }
}
