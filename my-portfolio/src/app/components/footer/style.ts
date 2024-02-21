import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.color.containerColor};
  border-top: 1px solid ${(props) => props.theme.color.primary};
  height: 72px;
  margin-top: 0.8%;
`;

export const Logo = styled.img`
  height: auto;
  width: auto;
`;

export const Nav = styled.nav`
  text-decoration: none;

  a {
    cursor: pointer;
  }
`;
