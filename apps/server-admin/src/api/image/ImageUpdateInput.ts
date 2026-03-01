import { AnnotationUpdateManyWithoutImagesInput } from "./AnnotationUpdateManyWithoutImagesInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ImageUpdateInput = {
  annotations?: AnnotationUpdateManyWithoutImagesInput;
  name?: string;
  project?: ProjectWhereUniqueInput;
  url?: string | null;
};
