import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Hero } from "src/hero/interfaces/interfaces";
import { HeroService } from "./hero.service";

@Injectable()
export class HeroClient implements OnModuleInit {
  private heroService: HeroService;

  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    console.log("onModuleInit")
    this.heroService = this.client.getService<HeroService>('HeroService');
  }

  getHero(): Hero {
    console.log("2. getHero")
    return this.heroService.findOne({ id: 1 });
  }
}