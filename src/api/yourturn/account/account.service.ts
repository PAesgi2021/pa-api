import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountRepository } from './account.repository';

@Injectable()
export class AccountService {

  constructor(
    @InjectRepository(AccountRepository) private accountRepository: AccountRepository) { }

  create(createAccountDto: CreateAccountDto) {
    return this.accountRepository.createAccount(createAccountDto);
  }

  findAll() {
    return this.accountRepository.find();
  }

  findOne(id: number) {
    return this.accountRepository.findOne(id);
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return this.accountRepository.delete(id);
  }
}
