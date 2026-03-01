import { Aimodel } from "../aimodel/Aimodel";
import { Image } from "../image/Image";
import { User } from "../user/User";

export type Annotation = {
  aiModel?: Array<Aimodel>;
  createdAt: Date;
  id: string;
  image?: Image;
  result: string | null;
  updatedAt: Date;
  url: string | null;
  validatedBy?: User | null;
};
