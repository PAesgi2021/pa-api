import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {

  constructor(@InjectRepository(RoleRepository) private roleRepository: RoleRepository) { }

  create(createRoleDto: CreateRoleDto) {
    return this.roleRepository.createRole(createRoleDto);
  }

  findAll() {
    return this.roleRepository.find();
  }

  findOne(id: number) {
    return this.roleRepository.findOne(id);
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleRepository.update(id, updateRoleDto);
  }

  remove(id: number) {
    return this.roleRepository.delete(id);
  }
}
