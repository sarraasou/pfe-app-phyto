import { Annotation as TAnnotation } from "../api/annotation/Annotation";

export const ANNOTATION_TITLE_FIELD = "result";

export const AnnotationTitle = (record: TAnnotation): string => {
  return record.result?.toString() || String(record.id);
};
