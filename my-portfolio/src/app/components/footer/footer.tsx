import { Container, Logo, Nav } from "./style";

export default function Footer() {
  return (
    <Container>
      <Logo src="../../../../public/img/orange-aj.png" />
      <Nav>
        <ul>
          <li><a>Github</a></li>
          <li><a>Linkedin</a></li>
          <li><a>Instagram</a></li>
        </ul>
      </Nav>
    </Container>
  );
}
