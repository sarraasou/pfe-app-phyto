import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthModelServiceBase } from "./base/authModel.service.base";

@Injectable()
export class AuthModelService extends AuthModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
