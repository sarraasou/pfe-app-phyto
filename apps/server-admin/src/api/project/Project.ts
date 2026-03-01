import { Collaborator } from "../collaborator/Collaborator";
import { Image } from "../image/Image";
import { User } from "../user/User";

export type Project = {
  collaborators?: Array<Collaborator>;
  createdAt: Date;
  description: string | null;
  id: string;
  images?: Array<Image>;
  title: string;
  tool: string | null;
  updatedAt: Date;
  user?: User | null;
};
