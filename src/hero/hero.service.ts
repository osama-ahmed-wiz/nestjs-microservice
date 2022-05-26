import { Injectable } from "@nestjs/common";
import { Hero, HeroById } from "./interfaces/interfaces";

@Injectable()
export class HeroService {

  findOne(data: HeroById): Hero {
    
    console.log("4. HeroService");

    const items = [
      { id: 1, name: 'Osama' },
      { id: 2, name: 'Osama' },
    ];

    return items.find(({ id }) => id === data.id);
  }
}
