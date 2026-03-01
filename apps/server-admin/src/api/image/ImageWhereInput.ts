import { AnnotationListRelationFilter } from "../annotation/AnnotationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ImageWhereInput = {
  annotations?: AnnotationListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  project?: ProjectWhereUniqueInput;
  url?: StringNullableFilter;
};
