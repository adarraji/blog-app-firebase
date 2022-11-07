import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { posts } from "../posts";


const Home = () => {
  return (
    <Container>
      <PostsContainer>
        {
          posts.map((post) => (
            < Post key={post.id} >
              <ImageContainer>
                <Image src={post.img} alt="" />
              </ImageContainer>
              <Content>
                <Link to={`/post/${post.id}`}>
                  <Title>{post.title}</Title>
                  <Descr>{post.descr}</Descr>
                  <Button>Read More</Button>
                </Link>
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
  
`;

const Post = styled.div`
  
`;

const ImageContainer = styled.div`
`;

const Image = styled.img`
`;

const Content = styled.div`
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Title = styled.h1`
`;

const Descr = styled.p`
`;

const Button = styled.button`
`;




export default Home