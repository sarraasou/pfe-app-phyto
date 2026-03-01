import { SortOrder } from "../../util/SortOrder";

export type AppConfigOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  key?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
