import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppConfigServiceBase } from "./base/appConfig.service.base";

@Injectable()
export class AppConfigService extends AppConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
