import { IsNotEmpty } from 'class-validator';


export class CreateYtPostDto {
  title: string;
  description: string;
  isPrivate = false;
}
