import { AnnotationWhereUniqueInput } from "../annotation/AnnotationWhereUniqueInput";
import { CollaboratorCreateNestedManyWithoutUsersInput } from "./CollaboratorCreateNestedManyWithoutUsersInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  annotations?: AnnotationWhereUniqueInput | null;
  collaborators?: CollaboratorCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  isValid?: boolean | null;
  lastName?: string | null;
  projects?: ProjectCreateNestedManyWithoutUsersInput;
  roles?: string | null;
  userRole?: string | null;
  username: string;
};
