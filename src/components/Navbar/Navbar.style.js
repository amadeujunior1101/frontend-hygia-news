import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

const Navbar = styled.div`
  background: #000;
  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  height: 40px;
  position: absolute;
  /* text-align: center; */
  top: 0;
  width: 100%;
`;

const ItenMenu = styled.h3`
  color: #fff;
  width: 1190px;
  height: 40px;
  /* background: brown; */
  text-align: right;
  align-items: center;
  display: grid;
  /* text-decoration: none; */

  @media (max-width: 780px) {
    text-align: center;
  }
`;

const Text = styled.div`
  margin: 1px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  align-items: center;
  display: inline-flex;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: #fff;
  margin: 3px;
`;

const ButtonLogout = styled.div`
  text-decoration: none;
  color: #fff;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
  margin-left: 10px;
`;

export { Navbar, ItenMenu, Text, StyledIcon, NavLink, ButtonLogout };
