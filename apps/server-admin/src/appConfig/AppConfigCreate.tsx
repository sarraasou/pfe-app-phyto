import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AppConfigCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Key" source="key" />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
