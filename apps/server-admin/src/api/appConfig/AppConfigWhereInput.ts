import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppConfigWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  value?: StringNullableFilter;
};
