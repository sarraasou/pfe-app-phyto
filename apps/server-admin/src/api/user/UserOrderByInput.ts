import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  annotationsId?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  isValid?: SortOrder;
  lastName?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  userRole?: SortOrder;
  username?: SortOrder;
};
