import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AuthModelModuleBase } from "./base/authModel.module.base";
import { AuthModelService } from "./authModel.service";
import { AuthModelController } from "./authModel.controller";
import { AuthModelResolver } from "./authModel.resolver";

@Module({
  imports: [AuthModelModuleBase, forwardRef(() => AuthModule)],
  controllers: [AuthModelController],
  providers: [AuthModelService, AuthModelResolver],
  exports: [AuthModelService],
})
export class AuthModelModule {}
