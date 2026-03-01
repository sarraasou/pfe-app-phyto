import * as graphql from "@nestjs/graphql";
import { AppConfigResolverBase } from "./base/appConfig.resolver.base";
import { AppConfig } from "./base/AppConfig";
import { AppConfigService } from "./appConfig.service";

@graphql.Resolver(() => AppConfig)
export class AppConfigResolver extends AppConfigResolverBase {
  constructor(protected readonly service: AppConfigService) {
    super(service);
  }
}
