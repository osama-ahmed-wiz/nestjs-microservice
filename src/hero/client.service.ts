import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Hero } from "src/hero/interfaces/interfaces";
import { GrpcHeroService } from "./hero.controller";

@Injectable()
export class HeroClientService implements OnModuleInit {

  private grpcHeroService: GrpcHeroService

  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    console.log("onModuleInit")
    this.grpcHeroService = this.client.getService('HeroService')
  }

  getHero(): Hero {
    console.log("2. getHero")
    return this.grpcHeroService.findOne({ id: 1 });
  }
}