import { Collaborator as TCollaborator } from "../api/collaborator/Collaborator";

export const COLLABORATOR_TITLE_FIELD = "id";

export const CollaboratorTitle = (record: TCollaborator): string => {
  return record.id?.toString() || String(record.id);
};
