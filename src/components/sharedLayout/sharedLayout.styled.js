import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  background-color: aqua;
  text-decoration: none;
  width: 150px;
  height: 50px;
  padding: 14px 28px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;
  border-radius: 10.3108px;
  text-align: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`;
export const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;
  justify-content: center;
  padding: 10px;
`;
export const MainWrap = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;
  padding: 10px;
  height: 100%;
  min-height: 100vh;
`;
