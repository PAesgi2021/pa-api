import { EntityRepository, Repository } from 'typeorm';
import { YtRole } from './entities/yt-role.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { YtCreateRoleDto } from './dto/yt-create-role.dto';


@EntityRepository(YtRole)
export class YtRoleRepository extends Repository<YtRole> {
  private logger = new Logger('roleRepository');

  async createRole(createRoleDto: YtCreateRoleDto): Promise<YtRole> {

    const role = new YtRole();
    role.name = createRoleDto.name;

    try {
      await role.save();
    } catch (error) {
      this.logger.error('Failed to save this yt-message');
      throw new InternalServerErrorException('Internal Server Error!');
    }
    return role;
  }
}