import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { YtAccountRepository } from '../yt-account.repository';
import { YtAccount } from '../entities/yt-account.entity';
import { JwtPayloadYourturn } from '../interfaces/jwt-payload.interface.yourturn';
import { YtRoleRepository } from '../../yt-role/yt-role.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(YtAccountRepository, 'angular')
    private ytAccountRepository: YtAccountRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'supersecretkey$',
    });
  }

  async validate(payload: JwtPayloadYourturn): Promise<YtAccount> {
    const { id } = payload;
    const acc = await this.ytAccountRepository.findOne({ id });

    if (!acc) {
      throw new UnauthorizedException('Not Authorized');
    }

    return acc;
  }
}
