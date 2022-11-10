import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import styled from "styled-components";
import EditImg from "../img/edit.png";
import DeleteImg from "../img/delete.png";
import Menu from "../components/Menu";
import { AuthContext } from "../context/authContext";
import parse from "html-react-parser";


const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${postId}`);
        setPost(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${postId}`, { withCredentials: true }); // withCredentials: true is needed to send the cookie to backend
      navigate("/");
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Content>
        <ProductImage src={`${process.env.REACT_APP_UPLOAD_URL}/${post?.img}`} alt="" />
        <User>
          <UserImage src="https://dummyjson.com/image/i/products/30/1.jpg" alt="" />
          <Info>
            <UserInfo>{post.username}</UserInfo>
            <PostInfo>Posted {moment(post.date).fromNow()}</PostInfo>
          </Info>
          {
            currentUser &&
            (
              currentUser.username === post.username && (
                <Edit>
                  <Link to="/write?edit=2" state={post}>
                    <EditImage src={EditImg} alt="" />
                  </Link>
                  <DeleteImage onClick={handleDelete} src={DeleteImg} alt="" />
                </Edit>)
            )
          }
        </User>
        <PostTitle>{post.title}</PostTitle>

        {/* using a parser because ReactQuill (Editor) returns html matkup text that will show onpage as html text */}
        <Descr>{parse(`${post.descr}`)}</Descr>

      </Content>
      <MenuContainer>
        <Menu cat={post.cat} />
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

const DeleteImage = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;


const PostTitle = styled.h1`
  font-size: 42px;
  color: #333;
`;

const Descr = styled.span`
  font-size: 18px;
`;


const MenuContainer = styled.div`
  flex: 2;
`;





export default Single