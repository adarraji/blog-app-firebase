import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import EditImg from "../img/edit.png";
import DeleteImg from "../img/delete.png";
import Menu from "../components/Menu";


const Single = () => {
  return (
    <Container>
      <Content>
        <ProductImage src="https://dummyjson.com/image/i/products/5/1.jpg" alt="" />
        <User>
          <UserImage src="https://dummyjson.com/image/i/products/30/1.jpg" alt="" />
          <Info>
            <UserInfo>John</UserInfo>
            <PostInfo>Posted 2 days ago</PostInfo>
          </Info>
          <Edit>
            <Link to="/write?edit=2">
              <EditImage src={EditImg} alt="" />
            </Link>
            <EditImage src={DeleteImg} alt="" />
          </Edit>
        </User>
        <PostTitle>Lorem ipsum is placeholder text commonly used in...</PostTitle>
        <PostDescr>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. <br />  <br /> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</PostDescr>
      </Content>
      <MenuContainer>
        <Menu />
      </MenuContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 50px;
`;

const Content = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const Info = styled.div`
  
`;

const UserInfo = styled.span`
  font-weight: bold;
`;

const PostInfo = styled.p`
  
`;

const Edit = styled.div`
  display: flex;
  gap: 5px;
`;

const EditImage = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;


const PostTitle = styled.h1`
  font-size: 42px;
  color: #333;
`;

const PostDescr = styled.p`
  text-align: justify;
  line-height: 30px;
`;

const MenuContainer = styled.div`
  flex: 2;
`;





export default Single