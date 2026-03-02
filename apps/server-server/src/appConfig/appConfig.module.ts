import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AppConfigModuleBase } from "./base/appConfig.module.base";
import { AppConfigService } from "./appConfig.service";
import { AppConfigController } from "./appConfig.controller";
import { AppConfigResolver } from "./appConfig.resolver";

@Module({
  imports: [AppConfigModuleBase, forwardRef(() => AuthModule)],
  controllers: [AppConfigController],
  providers: [AppConfigService, AppConfigResolver],
  exports: [AppConfigService],
})
export class AppConfigModule {}
