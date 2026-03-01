import { SortOrder } from "../../util/SortOrder";

export type CollaboratorOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
};
