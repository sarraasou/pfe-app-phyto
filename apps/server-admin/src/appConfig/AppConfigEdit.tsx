import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AppConfigEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Key" source="key" />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
