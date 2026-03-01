import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { AnnotationTitle } from "../annotation/AnnotationTitle";
import { CollaboratorTitle } from "../collaborator/CollaboratorTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="annotations.id"
          reference="Annotation"
          label="Annotations"
        >
          <SelectInput optionText={AnnotationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="collaborators" reference="Collaborator">
          <SelectArrayInput
            optionText={CollaboratorTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <BooleanInput label="isValid" source="isValid" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput source="projects" reference="Project">
          <SelectArrayInput
            optionText={ProjectTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Roles" source="roles" />
        <TextInput label="userRole" source="userRole" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
