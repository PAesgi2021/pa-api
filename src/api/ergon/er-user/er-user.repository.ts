import {EntityRepository, Repository} from 'typeorm';
import {InternalServerErrorException,} from '@nestjs/common';
import {ErUser} from "./entities/er-user.entity";
import {ErUserDto} from "./dto/er-user.dto";
import {SignInUserDTO} from "./dto/SignInUser.dto";
import * as bcrypt from 'bcrypt';
import {User} from "../../../auth/user.entity";


@EntityRepository(ErUser)
export class ErUserRepository extends Repository<ErUser> {
    async signUp(createErUserDto: ErUserDto): Promise<ErUser> {
        const {username, password, firstname, lastname} = createErUserDto;

        let erUser = new ErUser();
        erUser.firstname = firstname;
        erUser.lastname = lastname;
        erUser.username = username;
        erUser.salt = await bcrypt.genSalt();
        erUser.password = await this.hashPassword(password, erUser.salt);

        await erUser.save();

        return erUser;

    }

    async validateUserPassword(signInUserDTO: SignInUserDTO): Promise<{ id: number, username: string, password: string }> {
        const {username, password} = signInUserDTO;
        const user = await this.findOne({username});
        if (user && await user.validatePassword(password)) {
            return user;
        } else {
            return null;
        }
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }


}
