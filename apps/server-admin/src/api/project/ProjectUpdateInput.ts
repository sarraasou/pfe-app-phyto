import { CollaboratorUpdateManyWithoutProjectsInput } from "./CollaboratorUpdateManyWithoutProjectsInput";
import { ImageUpdateManyWithoutProjectsInput } from "./ImageUpdateManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  collaborators?: CollaboratorUpdateManyWithoutProjectsInput;
  description?: string | null;
  images?: ImageUpdateManyWithoutProjectsInput;
  title?: string;
  tool?: string | null;
  user?: UserWhereUniqueInput | null;
};
