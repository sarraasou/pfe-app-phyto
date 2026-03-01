import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppConfigService } from "./appConfig.service";
import { AppConfigControllerBase } from "./base/appConfig.controller.base";

@swagger.ApiTags("appConfigs")
@common.Controller("appConfigs")
export class AppConfigController extends AppConfigControllerBase {
  constructor(protected readonly service: AppConfigService) {
    super(service);
  }
}
