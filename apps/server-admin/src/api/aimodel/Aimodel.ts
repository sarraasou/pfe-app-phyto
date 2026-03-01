import { Annotation } from "../annotation/Annotation";

export type Aimodel = {
  annotations?: Array<Annotation>;
  createdAt: Date;
  id: string;
  modelType: string;
  name: string;
  updatedAt: Date;
};
