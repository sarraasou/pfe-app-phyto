import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnnotationModuleBase } from "./base/annotation.module.base";
import { AnnotationService } from "./annotation.service";
import { AnnotationController } from "./annotation.controller";
import { AnnotationResolver } from "./annotation.resolver";

@Module({
  imports: [AnnotationModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnnotationController],
  providers: [AnnotationService, AnnotationResolver],
  exports: [AnnotationService],
})
export class AnnotationModule {}
