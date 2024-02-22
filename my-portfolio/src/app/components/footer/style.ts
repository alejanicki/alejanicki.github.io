import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.color.containerColor};
  border-top: 1px solid ${(props) => props.theme.color.primary};
  height: 72px;
  margin-top: 0.8%;
  padding: 2px 10.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: auto;
  width: auto;
`;

export const Nav = styled.nav`
  * {
    text-decoration: none;
    list-style: none;
  }
  
  a {
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
    color: ${props => props.theme.color.primary};
  }

  ul {
    display: flex;
    justify-content: space-between;
    gap: 200px;
    font-weight: 700;
  }
`;

export const Copyright = styled.div``;
