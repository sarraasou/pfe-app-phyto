import { AnnotationCreateNestedManyWithoutAimodelsInput } from "./AnnotationCreateNestedManyWithoutAimodelsInput";

export type AimodelCreateInput = {
  annotations?: AnnotationCreateNestedManyWithoutAimodelsInput;
  modelType: string;
  name: string;
};
