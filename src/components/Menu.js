import React from "react";
import styled from "styled-components";

const posts = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
];

const Menu = () => {
    return (
        <Container>
            <Header>Other posts you may like</Header>
            {
                posts.map(post => (

                    <Post key={post.id}>
                        <Image src={post.img} alt="" />
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