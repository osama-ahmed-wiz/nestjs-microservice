import { Metadata, ServerUnaryCall } from "@grpc/grpc-js";
import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { Hero, HeroById } from "./interfaces/interfaces";

@Controller()
export class HeroService {
  @GrpcMethod('HeroService')
  findOne(data: HeroById, metadata?: Metadata, call?: ServerUnaryCall<any, any>): Hero {
    
    console.log("Grpc Hero Service");

    const items = [
      { id: 1, name: 'Osama' },
      { id: 2, name: 'Osama' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
