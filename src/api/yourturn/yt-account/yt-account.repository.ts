import { EntityRepository, Repository } from 'typeorm';
import { YtAccount } from './entities/yt-account.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { YtAccountDto } from './dto/yt-account.dto';
import * as bcrypt from 'bcrypt';

@EntityRepository(YtAccount)
export class YtAccountRepository extends Repository<YtAccount> {
  private logger = new Logger('accountRepository');

  async createAccount(createAccountDto: YtAccountDto): Promise<YtAccount> {
    const {email, password} = createAccountDto;

    const account = new YtAccount();
    account.email = email;
    account.salt = await bcrypt.genSalt();
    account.password = await this.hashPassword(password, account.salt);

    try {
      await account.save();

    } catch (error) {
      this.logger.error('Failed to register account');
      throw new InternalServerErrorException('Internal Server Error!');
    }
    return account;
  }

  async validateUserPassword(signInAccountDTO: YtAccountDto): Promise<{ id: number, email: string, password: string }> {
    const {email, password} = signInAccountDTO;
    const account = await this.findOne({email});
    if (account && await account.validatePassword(password)) {
      return account;
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

}
