import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Menu = ({ cat }) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts?cat=${cat}`);
                setPosts(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [cat]);

    return (
        <Container>
            <Header>Other posts you may like</Header>
            {
                posts.map(post => (

                    <Post key={post.id}>
                        <Image src={`${process.env.REACT_APP_UPLOAD_URL}/${post?.img}`} alt="" />
                        <PostTitle>{post.title}</PostTitle>
                        <Button>Read More</Button>
                    </Post>
                ))
            }
        </Container>
    )
};


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const Header = styled.h1`
    font-size: 20px;
    color: #555;
`;

const Post = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const PostTitle = styled.h2`
    color: #555;
`;

const Button = styled.button`
    width: max-content;
    padding: 7.5px 15px;
    border: none;
    cursor: pointer;
    color: teal;
    background-color: white;
    border: 1px solid teal;

    &:hover {
              border: 1px solid white;
              background-color: #b9e7e7;
              color: black;
            }
`;


export default Menu