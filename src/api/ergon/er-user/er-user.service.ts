import {Injectable, Logger, UnauthorizedException} from '@nestjs/common';
import {CreateErUserDto} from './dto/create-er-user.dto';
import {UpdateErUserDto} from './dto/update-er-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {ErUserRepository} from "./er-user.repository";
import {SignInDto} from "../../../auth/dto/signin.dto";
import {JwtPayload} from "../../../auth/interfaces/jwt-payload.interface";
import {SignInUserDTO} from "./dto/SignInUser.dto";

@Injectable()
export class ErUserService {

  private logger = new Logger('ErUserService');
  constructor(
      @InjectRepository(ErUserRepository)
      private erUserRepository: ErUserRepository,

  ) { }
  async signUp(createErUserDto: CreateErUserDto) {
    return this.erUserRepository.signUp(createErUserDto);
  }

  async signIn(signInUserDto: SignInUserDTO): Promise<number> {
    const user = await this.erUserRepository.validateUserPassword(signInUserDto);

    if (!user) {
      throw new UnauthorizedException('Invalid Credentials');
    }


    this.logger.debug(`Successfully Authenticated User ${JSON.stringify(user.username)}`);

    return 1;
  }

  findAll() {
    return `This action returns all erUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} erUser`;
  }

  update(id: number, updateErUserDto: UpdateErUserDto) {
    return `This action updates a #${id} erUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} erUser`;
  }
}
