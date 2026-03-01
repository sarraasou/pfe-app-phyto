import * as graphql from "@nestjs/graphql";
import { AnnotationResolverBase } from "./base/annotation.resolver.base";
import { Annotation } from "./base/Annotation";
import { AnnotationService } from "./annotation.service";

@graphql.Resolver(() => Annotation)
export class AnnotationResolver extends AnnotationResolverBase {
  constructor(protected readonly service: AnnotationService) {
    super(service);
  }
}
