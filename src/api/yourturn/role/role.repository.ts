import { EntityRepository, Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {
  private logger = new Logger('roleRepository');

  async createRole(createRoleDto: CreateRoleDto): Promise<Role> {

    const role = new Role();
    role.role = createRoleDto.role;

    try {
      await role.save();
    } catch (error) {
      this.logger.error('Failed to save this message');
      throw new InternalServerErrorException('Internal Server Error!');
    }
    return role;
  }
}