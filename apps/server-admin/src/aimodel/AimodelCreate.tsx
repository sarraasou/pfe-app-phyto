import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AnnotationTitle } from "../annotation/AnnotationTitle";

export const AimodelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="annotations" reference="Annotation">
          <SelectArrayInput
            optionText={AnnotationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="modelType" source="modelType" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
