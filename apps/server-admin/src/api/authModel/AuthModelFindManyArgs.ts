import { AuthModelWhereInput } from "./AuthModelWhereInput";
import { AuthModelOrderByInput } from "./AuthModelOrderByInput";

export type AuthModelFindManyArgs = {
  where?: AuthModelWhereInput;
  orderBy?: Array<AuthModelOrderByInput>;
  skip?: number;
  take?: number;
};
