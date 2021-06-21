import {EntityRepository, Repository} from 'typeorm';
import {InternalServerErrorException,} from '@nestjs/common';
import {ErUser} from "./entities/er-user.entity";
import {CreateErUserDto} from "./dto/create-er-user.dto";


@EntityRepository(ErUser)
export class ErUserRepository extends Repository<ErUser> {
  async signUp(createErUserDto: CreateErUserDto): Promise<void> {
    const { username, password } = createErUserDto;

    const erUser = new ErUser();
    erUser.username = username;
    //erUser.salt = await bcrypt.genSalt();
    erUser.password =  password//await this.hashPassword(password, erUser.salt);
    console.log("BUILDED");
    console.log(username);
    console.log(password);
    console.log(erUser);

    try {
      await erUser.save();
      console.log("SAVED");
    } catch (error) {
        throw new InternalServerErrorException();
      }

  }

  //async validateUserPassword(signInUserDTO: SignInUserDTO): Promise<{ id: number, username: string, password: string}> {
   // const { username, password } = signInUserDTO;
   // const user = await this.findOne({ username });
    //if (user && await user.validatePassword(password)) {
    //  return user;
   // } else {
    //  return null;
    //}
  //}

  //private async hashPassword(password: string, salt: string): Promise<string> {
  //  return bcrypt.hash(password, salt);
  //}


}
