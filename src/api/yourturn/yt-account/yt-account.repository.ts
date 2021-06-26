import { EntityRepository, Repository } from 'typeorm';
import { YtAccount } from './entities/yt-account.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { YtCreateAccountDto } from './dto/yt-create-account.dto';

@EntityRepository(YtAccount)
export class YtAccountRepository extends Repository<YtAccount> {
  private logger = new Logger('accountRepository');

  async createAccount(createAccountDto: YtCreateAccountDto): Promise<YtAccount> {

    const account = new YtAccount();
    account.username = createAccountDto.username;
    account.password = createAccountDto.password;

    try {
      await account.save();

    } catch (error) {
      this.logger.error('Failed to save this yt-message');
      throw new InternalServerErrorException('Internal Server Error!');
    }
    return account;
  }

}