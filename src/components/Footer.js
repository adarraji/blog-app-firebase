import React from "react";
import styled from "styled-components";
import LogoImage from "../img/logo.png"

const Footer = () => {
  return (
    <Container>
      <Image src={LogoImage} alt="" />
      <Text>
        Made with <b>React.js</b>
      </Text>
    </Container>
  )
};


const Container = styled.footer`
  margin-top: 100px;
  padding: 20px;
  background-color: #b9e7e7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;

const Image = styled.img`
  height: 50px;
`;

const Text = styled.span`
 
`;

export default Footer;