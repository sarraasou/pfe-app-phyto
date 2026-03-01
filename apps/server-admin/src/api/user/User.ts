import { Annotation } from "../annotation/Annotation";
import { Collaborator } from "../collaborator/Collaborator";
import { Project } from "../project/Project";

export type User = {
  annotations?: Annotation | null;
  collaborators?: Array<Collaborator>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  isValid: boolean | null;
  lastName: string | null;
  projects?: Array<Project>;
  roles: string | null;
  updatedAt: Date;
  userRole: string | null;
  username: string;
};
