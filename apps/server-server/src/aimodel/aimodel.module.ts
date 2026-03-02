import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AimodelModuleBase } from "./base/aimodel.module.base";
import { AimodelService } from "./aimodel.service";
import { AimodelController } from "./aimodel.controller";
import { AimodelResolver } from "./aimodel.resolver";

@Module({
  imports: [AimodelModuleBase, forwardRef(() => AuthModule)],
  controllers: [AimodelController],
  providers: [AimodelService, AimodelResolver],
  exports: [AimodelService],
})
export class AimodelModule {}
