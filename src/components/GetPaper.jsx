import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo } from "../data";
import { moreInfo2 } from "../data";
import { moreInfo3 } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import Logo from "../images/Paper_header.PNG";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function GetPaper() {
  const { avatar_url, bio } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Get Paper</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                {moreInfo && <p>{moreInfo}</p>}
              </Container>
              <Container>
                {moreInfo2 && <p><b>{moreInfo2}</b></p>}
              </Container>
              <Container>
                {moreInfo2 && <p>{moreInfo3}</p>}
              </Container>
            </Col>
          <Col className="d-none d-md-block">
            <img
              src={Logo}
              alt="Logo"
              className="w-75 mx-auto"
            />
          </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
