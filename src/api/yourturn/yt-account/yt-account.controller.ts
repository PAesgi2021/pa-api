import {Controller, Get, Post, Body, Patch, Param, Delete, Logger, BadRequestException} from '@nestjs/common';
import { YtAccountService } from './yt-account.service';
import { YtAccountDto } from './dto/yt-account.dto';
import { YtUpdateAccountDto } from './dto/yt-update-account.dto';

@Controller('yt-account')
export class YtAccountController {
  private logger = new Logger('ErUserController');
  constructor(private readonly accountService: YtAccountService) {}

  @Post()
  create(@Body() createAccountDto: YtAccountDto) {
    this.logger.verbose('Registering!');
    return this.accountService.create(createAccountDto);
  }

  @Post('/login')
  signIn(@Body() signInAccountDTO: YtAccountDto): Promise<YtAccountDto> {
    this.logger.verbose('Logging!');
    return this.accountService.signIn(signInAccountDTO);
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
