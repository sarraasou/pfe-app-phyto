import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AnnotationTitle } from "../annotation/AnnotationTitle";

export const AimodelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
