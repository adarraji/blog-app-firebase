import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import styled from "styled-components";
import LogoImage from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link to="/">
            <Image src={LogoImage} alt="" />
          </Link>
        </Logo>
        <Links>
          <StyledLink to="/?cat=art">
            <LinkHeader>ART</LinkHeader>
          </StyledLink>
          <StyledLink to="/?cat=science">
            <LinkHeader>SCIENCE</LinkHeader>
          </StyledLink>
          <StyledLink to="/?cat=technology">
            <LinkHeader>TECHNOLOGY</LinkHeader>
          </StyledLink>
          <StyledLink to="/?cat=cinema">
            <LinkHeader>CINEMA</LinkHeader>
          </StyledLink>
          <StyledLink to="/?cat=design">
            <LinkHeader>DESIGN</LinkHeader>
          </StyledLink>
          <StyledLink to="/?cat=food">
            <LinkHeader>FOOD</LinkHeader>
          </StyledLink>
          <User>{currentUser && currentUser.username}</User>
          {currentUser ? <Logout onClick={logout}>Logout</Logout> : <StyledLink to="/login">Login</StyledLink>}
          <Writelink>
            <StyledLink to="write">
              <LinkHeader>Write</LinkHeader>
            </StyledLink>
          </Writelink>
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
  width: 170px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;  
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const LinkHeader = styled.h6`
  font-size: 16px;
  font-weight: 300;
  text-decoration: none;
`;

const User = styled.span`
  cursor: pointer;
`;

const Logout = styled.span`
  cursor: pointer;
`;

const Writelink = styled.span`
  background-color: #b9e7e7;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  border: 1px solid white;

  &:hover {
    background-color: white;
    color:teal;
    border: 1px solid teal;
  }
`;



export default Navbar