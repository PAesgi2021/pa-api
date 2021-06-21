import {IsNotEmpty} from "class-validator";

export class SignInUserDTO {

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;


}
