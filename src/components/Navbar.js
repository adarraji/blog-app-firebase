import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../img/logo.png"

const linkList = [
  {
    path: "/?cat=art",
    title: "ART"
  },
  {
    path: "/?cat=science",
    title: "SCIENCE"
  },
  {
    path: "/?cat=technology",
    title: "TECHNOLOGY"
  },
  {
    path: "/?cat=cinema",
    title: "CINEMA"
  },
  {
    path: "/?cat=design",
    title: "DESIGN"
  },
  {
    path: "/?cat=food",
    title: "FOOD"
  }
];

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link to="/" />
          <Image src={LogoImage} />
        </Logo>
        <Links>
          {
            linkList.map((item, index) => {
              return (
                <Link to={item.path} key={index}>
                  <LinkHeader>{item.title}</LinkHeader>
                </Link>
              )
            })
          }
        </Links>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  
`;

const Wrapper = styled.div`
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
  
`;

const Image = styled.img`
  width: 120px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LinkHeader = styled.h6`
  font-size: 16px;
  font-weight: 300;
`;



export default Navbar