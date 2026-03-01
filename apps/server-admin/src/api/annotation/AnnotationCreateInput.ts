import { AimodelCreateNestedManyWithoutAnnotationsInput } from "./AimodelCreateNestedManyWithoutAnnotationsInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AnnotationCreateInput = {
  aiModel?: AimodelCreateNestedManyWithoutAnnotationsInput;
  image: ImageWhereUniqueInput;
  result?: string | null;
  url?: string | null;
  validatedBy?: UserWhereUniqueInput | null;
};
