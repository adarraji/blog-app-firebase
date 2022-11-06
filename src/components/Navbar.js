import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link to="/" />
          <Image src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
        </Logo>
        <Links>
          <Link to="/?cat=art">
            <LinkHeader>ART</LinkHeader>
          </Link>
          <Link to="/?cat=science">
            <LinkHeader>SCIENCE</LinkHeader>
          </Link>
          <Link to="/?cat=technology">
            <LinkHeader>TECHNOLOGY</LinkHeader>
          </Link>
          <Link to="/?cat=cinema">
            <LinkHeader>CINEMA</LinkHeader>
          </Link>
          <Link to="/?cat=design">
            <LinkHeader>DESIGN</LinkHeader>
          </Link>
          <Link to="/?cat=food">
            <LinkHeader>FOOD</LinkHeader>
          </Link>
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