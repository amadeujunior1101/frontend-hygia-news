import React, { useState, useEffect } from "react";

import { Redirect, Route, useLocation, useHistory } from "react-router-dom";

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
} from "./Navbar.style";

import { isAuthenticated, logout } from "../../auth/authentication";

export default function App() {
  let history = useHistory();

  function usePageViews() {
    history.push("/dashboard");
  }

  return (
    <Navbar>
      <ItenMenu>
        <Text>
          {isAuthenticated() === true ? (
            <>
              <NavLink to="/">
                <StyledIcon icon={faHome} size="1x" />
                Inicio
              </NavLink>
              <ButtonLogout onClick={usePageViews}>
                <StyledIcon icon={faList} size="1x" />
                Painel
              </ButtonLogout>
              <ButtonLogout onClick={logout}>
                <StyledIcon icon={faDoorOpen} size="1x" />
                Sair
              </ButtonLogout>
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
