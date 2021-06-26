import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { YtAccountService } from './yt-account.service';
import { YtCreateAccountDto } from './dto/yt-create-account.dto';
import { YtUpdateAccountDto } from './dto/yt-update-account.dto';

@Controller('account')
export class YtAccountController {
  constructor(private readonly accountService: YtAccountService) {}

  @Post()
  create(@Body() createAccountDto: YtCreateAccountDto) {
    return this.accountService.create(createAccountDto);
  }

  @Get()
  findAll() {
    return this.accountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: YtUpdateAccountDto) {
    return this.accountService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountService.remove(+id);
  }
}
