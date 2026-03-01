import { Module } from "@nestjs/common";
import { AppConfigModuleBase } from "./base/appConfig.module.base";
import { AppConfigService } from "./appConfig.service";
import { AppConfigController } from "./appConfig.controller";
import { AppConfigResolver } from "./appConfig.resolver";

@Module({
  imports: [AppConfigModuleBase],
  controllers: [AppConfigController],
  providers: [AppConfigService, AppConfigResolver],
  exports: [AppConfigService],
})
export class AppConfigModule {}
