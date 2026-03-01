import * as graphql from "@nestjs/graphql";
import { AimodelResolverBase } from "./base/aimodel.resolver.base";
import { Aimodel } from "./base/Aimodel";
import { AimodelService } from "./aimodel.service";

@graphql.Resolver(() => Aimodel)
export class AimodelResolver extends AimodelResolverBase {
  constructor(protected readonly service: AimodelService) {
    super(service);
  }
}
