import { CollaboratorCreateNestedManyWithoutProjectsInput } from "./CollaboratorCreateNestedManyWithoutProjectsInput";
import { ImageCreateNestedManyWithoutProjectsInput } from "./ImageCreateNestedManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  collaborators?: CollaboratorCreateNestedManyWithoutProjectsInput;
  description?: string | null;
  images?: ImageCreateNestedManyWithoutProjectsInput;
  title: string;
  tool?: string | null;
  user?: UserWhereUniqueInput | null;
};
