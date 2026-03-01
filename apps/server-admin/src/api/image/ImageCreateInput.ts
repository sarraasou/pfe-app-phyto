import { AnnotationCreateNestedManyWithoutImagesInput } from "./AnnotationCreateNestedManyWithoutImagesInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ImageCreateInput = {
  annotations?: AnnotationCreateNestedManyWithoutImagesInput;
  name: string;
  project: ProjectWhereUniqueInput;
  url?: string | null;
};
