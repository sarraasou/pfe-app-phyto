import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "name";

export const ImageTitle = (record: TImage): string => {
  return record.name?.toString() || String(record.id);
};
