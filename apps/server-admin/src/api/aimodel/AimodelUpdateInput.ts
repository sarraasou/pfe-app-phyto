import { AnnotationUpdateManyWithoutAimodelsInput } from "./AnnotationUpdateManyWithoutAimodelsInput";

export type AimodelUpdateInput = {
  annotations?: AnnotationUpdateManyWithoutAimodelsInput;
  modelType?: string;
  name?: string;
};
