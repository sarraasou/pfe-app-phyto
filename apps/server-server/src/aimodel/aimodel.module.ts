import { Module } from "@nestjs/common";
import { AimodelModuleBase } from "./base/aimodel.module.base";
import { AimodelService } from "./aimodel.service";
import { AimodelController } from "./aimodel.controller";
import { AimodelResolver } from "./aimodel.resolver";

@Module({
  imports: [AimodelModuleBase],
  controllers: [AimodelController],
  providers: [AimodelService, AimodelResolver],
  exports: [AimodelService],
})
export class AimodelModule {}
