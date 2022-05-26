import { Metadata, ServerUnaryCall } from "@grpc/grpc-js";
import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { HeroService } from "./hero.service";
import { Hero, HeroById } from "./interfaces/interfaces";

@Controller()
export class GrpcHeroService {

  constructor(private heroService: HeroService) {}

  // Grpc Service
  @GrpcMethod('HeroService', 'FindOne')
  findOne(data: HeroById, metadata?: Metadata, call?: ServerUnaryCall<any, any>): Hero {
    
    console.log("3. GrpcHeroService");
    return this.heroService.findOne(data)

  }
}