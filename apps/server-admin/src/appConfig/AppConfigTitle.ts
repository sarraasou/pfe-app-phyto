import { AppConfig as TAppConfig } from "../api/appConfig/AppConfig";

export const APPCONFIG_TITLE_FIELD = "key";

export const AppConfigTitle = (record: TAppConfig): string => {
  return record.key?.toString() || String(record.id);
};
