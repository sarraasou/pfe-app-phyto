import { AnnotationListRelationFilter } from "../annotation/AnnotationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AimodelWhereInput = {
  annotations?: AnnotationListRelationFilter;
  id?: StringFilter;
  modelType?: StringFilter;
  name?: StringFilter;
};
