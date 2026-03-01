import { SortOrder } from "../../util/SortOrder";

export type AnnotationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  imageId?: SortOrder;
  result?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  validatedById?: SortOrder;
};
