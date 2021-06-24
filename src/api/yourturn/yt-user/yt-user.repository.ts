import { EntityRepository, Repository } from 'typeorm';
import { YtUser } from './entities/yt-user.entity';


@EntityRepository(YtUser)
export class YtUserRepository extends Repository<YtUser> {
}