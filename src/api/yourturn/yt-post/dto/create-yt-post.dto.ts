import { IsNotEmpty } from 'class-validator';


export class YtCreateYtPostDto {
  title: string;
  description: string;
  isPrivate = false;
}
