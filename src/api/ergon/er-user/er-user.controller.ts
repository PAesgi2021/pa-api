import {Body, Controller, Delete, Get, Logger, Param, Patch, Post} from '@nestjs/common';
import {ErUserService} from './er-user.service';
import {CreateErUserDto} from './dto/create-er-user.dto';
import {UpdateErUserDto} from './dto/update-er-user.dto';

@Controller('er-user')
export class ErUserController {
  private logger = new Logger('ErUserController');
  constructor(private erUserService: ErUserService) { }

  @Post('/signup')
  signUp(@Body() createErUserDto: CreateErUserDto): Promise<void> {
    this.logger.verbose('Registering!'); // logging status
    return this.erUserService.signUp(createErUserDto);
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
