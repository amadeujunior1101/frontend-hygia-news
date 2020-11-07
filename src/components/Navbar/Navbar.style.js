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
  display: flex;
  /* text-decoration: none; */

  @media (max-width: 780px) {
    text-align: center;
  }
`;

const Text = styled.div`
  margin: 1px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  align-items: center;
  display: inline-flex;
  margin-left: 10px;

  @media (max-width: 780px) {
    margin-left: 0;
  }
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

const LabelName = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;

  @media (max-width: 780px) {
    display: none;
  }
`;

const BaseOptionsMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;

  @media (max-width: 780px) {
    width: 100%;
    justify-content: space-between;
    margin: 0 5px 0 5px;
  }
`;

export {
  Navbar,
  ItenMenu,
  Text,
  StyledIcon,
  NavLink,
  ButtonLogout,
  LabelName,
  BaseOptionsMenu,
};
