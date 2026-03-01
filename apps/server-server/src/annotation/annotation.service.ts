import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnnotationServiceBase } from "./base/annotation.service.base";

@Injectable()
export class AnnotationService extends AnnotationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
