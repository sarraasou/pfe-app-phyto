import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AppConfigList } from "./appConfig/AppConfigList";
import { AppConfigCreate } from "./appConfig/AppConfigCreate";
import { AppConfigEdit } from "./appConfig/AppConfigEdit";
import { AppConfigShow } from "./appConfig/AppConfigShow";
import { AimodelList } from "./aimodel/AimodelList";
import { AimodelCreate } from "./aimodel/AimodelCreate";
import { AimodelEdit } from "./aimodel/AimodelEdit";
import { AimodelShow } from "./aimodel/AimodelShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { ImageList } from "./image/ImageList";
import { ImageCreate } from "./image/ImageCreate";
import { ImageEdit } from "./image/ImageEdit";
import { ImageShow } from "./image/ImageShow";
import { AnnotationList } from "./annotation/AnnotationList";
import { AnnotationCreate } from "./annotation/AnnotationCreate";
import { AnnotationEdit } from "./annotation/AnnotationEdit";
import { AnnotationShow } from "./annotation/AnnotationShow";
import { CollaboratorList } from "./collaborator/CollaboratorList";
import { CollaboratorCreate } from "./collaborator/CollaboratorCreate";
import { CollaboratorEdit } from "./collaborator/CollaboratorEdit";
import { CollaboratorShow } from "./collaborator/CollaboratorShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"server"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="AppConfig"
          list={AppConfigList}
          edit={AppConfigEdit}
          create={AppConfigCreate}
          show={AppConfigShow}
        />
        <Resource
          name="Aimodel"
          list={AimodelList}
          edit={AimodelEdit}
          create={AimodelCreate}
          show={AimodelShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Image"
          list={ImageList}
          edit={ImageEdit}
          create={ImageCreate}
          show={ImageShow}
        />
        <Resource
          name="Annotation"
          list={AnnotationList}
          edit={AnnotationEdit}
          create={AnnotationCreate}
          show={AnnotationShow}
        />
        <Resource
          name="Collaborator"
          list={CollaboratorList}
          edit={CollaboratorEdit}
          create={CollaboratorCreate}
          show={CollaboratorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
