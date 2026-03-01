import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AimodelServiceBase } from "./base/aimodel.service.base";

@Injectable()
export class AimodelService extends AimodelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
