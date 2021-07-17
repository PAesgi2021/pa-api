import {IsEmail} from "class-validator";

export class YtAccountDto {
  @IsEmail()
  email: string;
  password: string;
}
