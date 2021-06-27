import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { YtProfileRoleService } from './yt-profile-role.service';
import { YtCreateProfileRoleDto } from './dto/create-yt-profile-role.dto';
import { YtUpdateProfileRoleDto } from './dto/update-yt-profile-role.dto';

@Controller('yt-profile-role')
export class YtProfileRoleController {
  constructor(private readonly ytProfileRoleService: YtProfileRoleService) {}

  @Post()
  create(@Body() createProfileRoleDto: YtCreateProfileRoleDto) {
    return this.ytProfileRoleService.create(createProfileRoleDto);
  }

  @Get()
  findAll() {
    return this.ytProfileRoleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ytProfileRoleService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProfileRoleDto: YtUpdateProfileRoleDto) {
  //   return this.ytProfileRoleService.update(+id, updateProfileRoleDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ytProfileRoleService.remove(+id);
  }
}
