import { Controller, Get } from '@nestjs/common';
import { HeroClientService } from './hero/client.service';

@Controller()
export class AppController {
  constructor(private readonly HeroClientService: HeroClientService) {}

  @Get("/")
  async getDataById(){
    console.log("1. getDataById")
    return this.HeroClientService.getHero()
  }

}
