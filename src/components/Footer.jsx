import styled from "styled-components";
// Components
import SocialLinks from "./SocialLinks";
import { Col, Container, Row } from "react-bootstrap";

const StyledFooter = styled.footer`
  min-height: var(--min-footer-height);
  background: var(--primary);

  a {
    color: #45413c;

    &:hover {
      color: #fbfdff;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter className="d-flex align-items-center justify-content-center p-2">
      <Container>
        <Row>
        <Col>
        <SocialLinks />
        </Col>
        <Col>
        <p style={{fontSize: "12px"}}>Credits: Website-Template by <a href='https://github.com/mshuber1981/github-react-portfolio-template'>mshuber1981</a> on GitHub, Avatar-Image by <a href="https://www.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_65309450.htm">catalyststuff</a> on Freepik</p>
        </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
}
