import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import parse from "html-react-parser";


const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${cat}`);
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [cat]);


  return (
    <Container>
      <PostsContainer>
        {
          posts.map((post) => (
            < Post key={post.id} >
              <ImageContainer>
                <Image src={`${process.env.REACT_APP_UPLOAD_URL}/${post.img}`} alt="" />
              </ImageContainer>
              <Content>
                <StyledLink to={`/post/${post.id}`}>
                  <Title>{post.title}</Title>
                </StyledLink>

                {/* using a parser because ReactQuill (Editor) returns html matkup text that will show onpage as html text */}

                <Descr>{parse(`${post.descr}`)}</Descr>


                <Button>Read More</Button>
              </Content>
            </Post>
          ))
        }
      </PostsContainer>
    </Container >
  )
}

const Container = styled.div`
  
`;


const PostsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px;
`;

const Post = styled.div`
  display: flex;
  gap: 100px;

  &:nth-child(2n+1) {
    flex-direction: row-reverse;
  }
`;

const ImageContainer = styled.div`
  flex: 2;
  position: relative;

  &:after {
    content: "";
    height: 100%;
    width: 100%;
    background-color: #b9e7e7;
    position: absolute;
    top: 10px;
    left: -10px;
    z-index: -1;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`;

const Content = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Title = styled.h1`
  font-size: 48px;
`;

const Descr = styled.span`
  font-size: 18px;
`;

const Button = styled.button`
  width: max-content;
  padding: 10px 20px;
  border: none;
  background-color: white;
  border: 1px solid teal;
  color: teal;
  cursor: pointer;

  &:hover{
    border: 1px solid white;
    background-color: #b9e7e7;
    color: black;
  }
`;




export default Home