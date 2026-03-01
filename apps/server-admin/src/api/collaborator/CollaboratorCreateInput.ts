import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserCreateNestedManyWithoutCollaboratorsInput } from "./UserCreateNestedManyWithoutCollaboratorsInput";

export type CollaboratorCreateInput = {
  project: ProjectWhereUniqueInput;
  user?: UserCreateNestedManyWithoutCollaboratorsInput;
};
