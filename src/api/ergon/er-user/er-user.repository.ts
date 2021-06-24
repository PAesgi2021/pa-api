import {EntityRepository, Repository} from 'typeorm';
import {InternalServerErrorException,} from '@nestjs/common';
import {ErUser} from "./entities/er-user.entity";
import {CreateErUserDto} from "./dto/create-er-user.dto";
import {SignInUserDTO} from "./dto/SignInUser.dto";
import * as bcrypt from 'bcrypt';


@EntityRepository(ErUser)
export class ErUserRepository extends Repository<ErUser> {
  async signUp(createErUserDto: CreateErUserDto): Promise<void> {
    const { username, password } = createErUserDto;

    let erUser = new ErUser();
    erUser.username = username;
    erUser.salt = await bcrypt.genSalt();
    erUser.password =  await this.hashPassword(password, erUser.salt);


      await erUser.save();
      console.log("SAVED");


  }

  async validateUserPassword(signInUserDTO: SignInUserDTO): Promise<{ id: number, username: string, password: string}> {
   const { username, password } = signInUserDTO;
      console.log("1")
   const user = await this.findOne({username});
      console.log("2")
    if (user && await user.validatePassword(password)) {
        console.log("3")
     return user;
   } else {
        console.log("null")
     return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
   return bcrypt.hash(password, salt);
  }


}
