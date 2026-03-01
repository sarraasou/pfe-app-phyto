import { Project } from "../project/Project";
import { User } from "../user/User";

export type Collaborator = {
  createdAt: Date;
  id: string;
  project?: Project;
  updatedAt: Date;
  user?: Array<User>;
};
