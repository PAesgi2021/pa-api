import { EntityRepository, Repository } from 'typeorm';
import { Account } from './entities/account.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';

@EntityRepository(Account)
export class AccountRepository extends Repository<Account> {
  private logger = new Logger('accountRepository');

  async createAccount(createAccountDto: CreateAccountDto): Promise<Account> {

    const account = new Account();
    account.username = createAccountDto.username;
    account.password = createAccountDto.password;

    try {
      await account.save();

    } catch (error) {
      this.logger.error('Failed to save this message');
      throw new InternalServerErrorException('Internal Server Error!');
    }
    return account;
  }

}