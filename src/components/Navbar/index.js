import React from "react";

import {
  faUser,
  faList,
  faDoorOpen,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import {
  Navbar,
  ItenMenu,
  Text,
  StyledIcon,
  NavLink,
  ButtonLogout,
  LabelName,
  BaseOptionsMenu,
} from "./Navbar.style";

import { isAuthenticated, logout } from "../../auth/authentication";

export default function App() {
  return (
    <Navbar>
      <ItenMenu>
        <Text>
          {isAuthenticated() === true ? (
            <>
              {isAuthenticated() === true && <LabelName>Olá, Fulano</LabelName>}
              <BaseOptionsMenu>
                <NavLink to="/">
                  <StyledIcon icon={faHome} size="1x" />
                  Inicio
                </NavLink>
                <NavLink to="/dashboard">
                  <StyledIcon icon={faList} size="1x" />
                  Painel
                </NavLink>
                <ButtonLogout onClick={logout}>
                  <StyledIcon icon={faDoorOpen} size="1x" />
                  Sair
                </ButtonLogout>
              </BaseOptionsMenu>
            </>
          ) : (
            <NavLink to="/login">
              <StyledIcon icon={faUser} size="1x" />
              Entrar
            </NavLink>
          )}
        </Text>
      </ItenMenu>
    </Navbar>
  );
}
