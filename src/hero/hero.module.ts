
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc-client.options';
import { HeroClientService } from './client.service';
import { GrpcHeroService } from './hero.controller';
import { HeroService } from './hero.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [GrpcHeroService],
  providers: [HeroService, HeroClientService],
  exports: [HeroClientService]
})
export class HeroModule {}