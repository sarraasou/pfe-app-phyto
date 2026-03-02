import { AnnotationWhereUniqueInput } from "../annotation/AnnotationWhereUniqueInput";
import { CollaboratorUpdateManyWithoutUsersInput } from "./CollaboratorUpdateManyWithoutUsersInput";
import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  annotations?: AnnotationWhereUniqueInput | null;
  collaborators?: CollaboratorUpdateManyWithoutUsersInput;
  firstName?: string | null;
  isValid?: boolean | null;
  lastName?: string | null;
  password?: string;
  projects?: ProjectUpdateManyWithoutUsersInput;
  roles?: string | null;
  userRole?: string | null;
  username?: string;
};
