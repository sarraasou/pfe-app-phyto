import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AuthModelService } from "./authModel.service";
import { AuthModelControllerBase } from "./base/authModel.controller.base";

@swagger.ApiTags("authModels")
@common.Controller("authModels")
export class AuthModelController extends AuthModelControllerBase {
  constructor(
    protected readonly service: AuthModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
