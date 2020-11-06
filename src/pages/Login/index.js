import React, { useState } from "react";

import { singIn } from "../../auth/authentication";

import {
  Box,
  Content,
  SidebarLeft,
  ContainerRigth,
  BaseForm,
  Register,
  RegisterForm,
  BorderField,
  ImageLeft,
  LabelEmail,
  LabelPassword,
  Input,
  InputButton,
  AlertFields,
  TitleSecundary,
  FormLoginH1,
} from "./Login.styled";

import imgSidebar from "../../assets/img-sidebar.png";

function App({ history }) {
  const [emailValue, setEmailvalue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  function handleEmail(e) {
    e.preventDefault();
    setEmailvalue(e.target.value);
  }

  function handlePassword(e) {
    e.preventDefault();
    setPasswordValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Box>
      <Content style={{ paddingTop: 0 }}>
        <SidebarLeft>
          <ImageLeft src={imgSidebar} alt="Image sideabar" />
        </SidebarLeft>
        <ContainerRigth>
          <BaseForm>
            <FormLoginH1>
              <strong>Bem-vindo</strong> ao Portal Hygia News
            </FormLoginH1>

            <TitleSecundary>
              Preencha os campos abaixo para acessar sua conta
            </TitleSecundary>

            <Register>
              <RegisterForm action="" onSubmit={handleSubmit}>
                <BorderField>
                  <LabelEmail htmlFor="">Email</LabelEmail>
                  <Input
                    type="email"
                    value={emailValue}
                    onChange={(e) => handleEmail(e)}
                  />
                </BorderField>
                <AlertFields>Obrigatório</AlertFields>

                <BorderField>
                  <LabelPassword htmlFor="">Senha</LabelPassword>
                  <Input
                    type="password"
                    value={passwordValue}
                    onChange={(e) => handlePassword(e)}
                  />
                </BorderField>
                <AlertFields className="alert-fields">Obrigatório</AlertFields>
              </RegisterForm>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <InputButton
                  type="submit"
                  value="Entrar"
                  onClick={() => {
                    singIn(emailValue, passwordValue, history);
                  }}
                />
              </div>
            </Register>
          </BaseForm>
        </ContainerRigth>
      </Content>
    </Box>
  );
}

export default App;
