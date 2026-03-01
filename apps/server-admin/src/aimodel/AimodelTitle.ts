import { Aimodel as TAimodel } from "../api/aimodel/Aimodel";

export const AIMODEL_TITLE_FIELD = "name";

export const AimodelTitle = (record: TAimodel): string => {
  return record.name?.toString() || String(record.id);
};
