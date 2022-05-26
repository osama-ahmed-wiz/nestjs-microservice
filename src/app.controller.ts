import { Controller, Get } from '@nestjs/common';
import { HeroClient } from './hero/client.controller';

@Controller()
export class AppController {
  constructor(private readonly heroClient: HeroClient) {}

  @Get("/")
  async getDataById(){
    console.log("1. getDataById")
    return this.heroClient.getHero()
  }

}
