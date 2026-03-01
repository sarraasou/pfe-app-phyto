import { AimodelListRelationFilter } from "../aimodel/AimodelListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AnnotationWhereInput = {
  aiModel?: AimodelListRelationFilter;
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
  result?: StringNullableFilter;
  url?: StringNullableFilter;
  validatedBy?: UserWhereUniqueInput;
};
