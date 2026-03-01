import { Annotation } from "../annotation/Annotation";
import { Project } from "../project/Project";

export type Image = {
  annotations?: Array<Annotation>;
  createdAt: Date;
  id: string;
  name: string;
  project?: Project;
  updatedAt: Date;
  url: string | null;
};
