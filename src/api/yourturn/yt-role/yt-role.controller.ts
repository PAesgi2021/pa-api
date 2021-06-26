import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { YtRoleService } from './yt-role.service';
import { YtCreateRoleDto } from './dto/yt-create-role.dto';
import { YtUpdateRoleDto } from './dto/yt-update-role.dto';

@Controller('role')
export class YtRoleController {
  constructor(private readonly roleService: YtRoleService) {}

  @Post()
  create(@Body() createRoleDto: YtCreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: YtUpdateRoleDto) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
