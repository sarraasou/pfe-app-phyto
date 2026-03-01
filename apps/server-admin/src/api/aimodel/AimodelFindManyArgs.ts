import { AimodelWhereInput } from "./AimodelWhereInput";
import { AimodelOrderByInput } from "./AimodelOrderByInput";

export type AimodelFindManyArgs = {
  where?: AimodelWhereInput;
  orderBy?: Array<AimodelOrderByInput>;
  skip?: number;
  take?: number;
};
