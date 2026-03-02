import { AnnotationWhereUniqueInput } from "../annotation/AnnotationWhereUniqueInput";
import { CollaboratorListRelationFilter } from "../collaborator/CollaboratorListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type UserWhereInput = {
  annotations?: AnnotationWhereUniqueInput;
  collaborators?: CollaboratorListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isValid?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  password?: StringFilter;
  projects?: ProjectListRelationFilter;
  roles?: StringNullableFilter;
  userRole?: StringNullableFilter;
  username?: StringFilter;
};
