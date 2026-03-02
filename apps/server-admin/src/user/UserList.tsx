import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ANNOTATION_TITLE_FIELD } from "../annotation/AnnotationTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Annotations"
          source="annotation.id"
          reference="Annotation"
        >
          <TextField source={ANNOTATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <BooleanField label="isValid" source="isValid" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Password" source="password" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userRole" source="userRole" />
        <TextField label="Username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
