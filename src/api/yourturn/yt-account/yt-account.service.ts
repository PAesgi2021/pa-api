import { Injectable } from '@nestjs/common';
import { YtCreateAccountDto } from './dto/yt-create-account.dto';
import { YtUpdateAccountDto } from './dto/yt-update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YtAccountRepository } from './yt-account.repository';


@Injectable()
export class YtAccountService {

  constructor(
    @InjectRepository(YtAccountRepository) private accountRepository: YtAccountRepository) {
  }

  create(createAccountDto: YtCreateAccountDto) {
    return this.accountRepository.createAccount(createAccountDto);
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
