import {Body, Controller, Delete, Get, Logger, Param, Patch, Post, Req, UseGuards} from '@nestjs/common';
import {YtAccountService} from './yt-account.service';
import {YtAccountDto} from './dto/yt-account.dto';
import {YtUpdateAccountDto} from './dto/yt-update-account.dto';
import {AuthGuard} from "@nestjs/passport";

@Controller('yt-account')
export class YtAccountController {
    private logger = new Logger('ErUserController');

    constructor(private readonly accountService: YtAccountService) {
    }

    @Post()
    create(@Body() createAccountDto: YtAccountDto) {
        this.logger.verbose('Registering!');
        return this.accountService.create(createAccountDto);
    }

    @Post('/login')
    signIn(@Body() signInAccountDTO: YtAccountDto,
           @Req() req): Promise<YtAccountDto> {
        this.logger.verbose('Logging!');
        this.logger.verbose(signInAccountDTO.email)
        this.logger.verbose(signInAccountDTO.password)
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

    @Post('/isAuthenticated')
    @UseGuards(AuthGuard('jwt'))
    test(@Req() req) {
        console.log(req.email)
    }
}
