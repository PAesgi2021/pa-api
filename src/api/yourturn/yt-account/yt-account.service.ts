import {Injectable, Logger, UnauthorizedException} from '@nestjs/common';
import {YtAccountDto} from './dto/yt-account.dto';
import {YtUpdateAccountDto} from './dto/yt-update-account.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {YtAccountRepository} from './yt-account.repository';
import {JwtService} from "@nestjs/jwt";
import {JwtPayloadYourturn} from "./interfaces/jwt-payload.interface.yourturn";
import {YtRoleRepository} from "../yt-role/yt-role.repository";


@Injectable()
export class YtAccountService {
    private logger = new Logger('YtAccountService');

    constructor(
        @InjectRepository(YtAccountRepository,'angular') private accountRepository: YtAccountRepository,
        private jwtService: JwtService
    ) {
    }

    create(createAccountDto: YtAccountDto) {
        return this.accountRepository.createAccount(createAccountDto);
    }

    async signIn(signInAccountDto: YtAccountDto): Promise<YtAccountDto> {
        const account = await this.accountRepository.validateUserPassword(signInAccountDto);

        if (!account) {
            throw new UnauthorizedException('Invalid Credentials');
        }

        const payload: JwtPayloadYourturn = {
            id: account.id,
            email: account.email,
            name: account.name
        }

        const accessToken = this.jwtService.sign(payload);
        const accountDTO = {...account, access_token: accessToken};
        this.logger.debug(`Successfully Generated JWT Token with payload ${JSON.stringify(payload)}`);
        this.logger.debug(`Successfully Authenticated User ${JSON.stringify(account.email)}`);

        return accountDTO;

    }

    findAll() {
        return this.accountRepository.find();
    }

    findOne(id: number) {
        return this.accountRepository.findOne(id);
    }

    update(id: number, updateAccountDto: YtUpdateAccountDto) {
        return this.accountRepository.update(id, updateAccountDto);
    }

    remove(id: number) {
        return this.accountRepository.delete(id);
    }
}
