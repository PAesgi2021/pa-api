import { Module } from '@nestjs/common';
import { ProfileRoleService } from './profile-role.service';
import { ProfileRoleController } from './profile-role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileRoleRepository } from './profile-role.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProfileRoleRepository])
  ],
  controllers: [ProfileRoleController],
  providers: [ProfileRoleService]
})
export class ProfileRoleModule {}
