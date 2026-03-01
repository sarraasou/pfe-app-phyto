import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserUpdateManyWithoutCollaboratorsInput } from "./UserUpdateManyWithoutCollaboratorsInput";

export type CollaboratorUpdateInput = {
  project?: ProjectWhereUniqueInput;
  user?: UserUpdateManyWithoutCollaboratorsInput;
};
