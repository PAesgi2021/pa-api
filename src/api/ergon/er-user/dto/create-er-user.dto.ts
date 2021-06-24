import {IsNotEmpty} from "class-validator";

export class CreateErUserDto {

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;


}