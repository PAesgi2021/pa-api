import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Logger,
} from '@nestjs/common';
import { YtMessageService } from './yt-message.service';
import { YtCreateMessageDto } from './dto/yt-create-message.dto';
import { YtUpdateMessageDto } from './dto/yt-update-message.dto';

@Controller('yt-message')
export class YtMessageController {
  private logger = new Logger('messageController');
  constructor(private readonly messageService: YtMessageService) {}

  @Post()
  create(@Body() createMessageDto: YtCreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }

  @Get()
  getAll() {
    return this.messageService.getMessages();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMessageDto: YtUpdateMessageDto,
  ) {
    return this.messageService.update(+id, updateMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(+id);
  }
}
