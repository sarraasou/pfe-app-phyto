import { AuthModel as TAuthModel } from "../api/authModel/AuthModel";

export const AUTHMODEL_TITLE_FIELD = "id";

export const AuthModelTitle = (record: TAuthModel): string => {
  return record.id?.toString() || String(record.id);
};
