import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AimodelService } from "./aimodel.service";
import { AimodelControllerBase } from "./base/aimodel.controller.base";

@swagger.ApiTags("aimodels")
@common.Controller("aimodels")
export class AimodelController extends AimodelControllerBase {
  constructor(
    protected readonly service: AimodelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
