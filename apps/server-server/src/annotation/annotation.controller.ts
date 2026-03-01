import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnnotationService } from "./annotation.service";
import { AnnotationControllerBase } from "./base/annotation.controller.base";

@swagger.ApiTags("annotations")
@common.Controller("annotations")
export class AnnotationController extends AnnotationControllerBase {
  constructor(protected readonly service: AnnotationService) {
    super(service);
  }
}
