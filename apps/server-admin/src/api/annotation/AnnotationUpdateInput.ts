import { AimodelUpdateManyWithoutAnnotationsInput } from "./AimodelUpdateManyWithoutAnnotationsInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AnnotationUpdateInput = {
  aiModel?: AimodelUpdateManyWithoutAnnotationsInput;
  image?: ImageWhereUniqueInput;
  result?: string | null;
  url?: string | null;
  validatedBy?: UserWhereUniqueInput | null;
};
