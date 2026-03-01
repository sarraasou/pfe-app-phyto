import { CollaboratorListRelationFilter } from "../collaborator/CollaboratorListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  collaborators?: CollaboratorListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: ImageListRelationFilter;
  title?: StringFilter;
  tool?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
