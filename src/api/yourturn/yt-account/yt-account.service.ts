import {Injectable, Logger, UnauthorizedException} from '@nestjs/common';
import { YtAccountDto } from './dto/yt-account.dto';
import { YtUpdateAccountDto } from './dto/yt-update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtAccountRepository } from './yt-account.repository';


@Injectable()
export class YtAccountService {
  private logger = new Logger('YtAccountService');
  constructor(
    @InjectRepository(YtAccountRepository) private accountRepository: YtAccountRepository) {
  }

  create(createAccountDto: YtAccountDto) {
    return this.accountRepository.createAccount(createAccountDto);
  }

  async signIn(signInAccountDto: YtAccountDto): Promise<YtAccountDto> {
    const account = await this.accountRepository.validateUserPassword(signInAccountDto);

    if (!account) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const response: YtAccountDto = {...account}
    this.logger.debug(`Successfully Authenticated User ${JSON.stringify(response.username)}`);
    return account;
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
