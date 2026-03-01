import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CollaboratorWhereInput = {
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  user?: UserListRelationFilter;
};
