import { AppConfigWhereInput } from "./AppConfigWhereInput";
import { AppConfigOrderByInput } from "./AppConfigOrderByInput";

export type AppConfigFindManyArgs = {
  where?: AppConfigWhereInput;
  orderBy?: Array<AppConfigOrderByInput>;
  skip?: number;
  take?: number;
};
