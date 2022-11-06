import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Login = () => {
  return (
    <Container>
      <Header>Login</Header>
      <Form>
        <Input required type="text" placeholder="username" />
        <Input required type="password" placeholder="password" />
        <Button>Login</Button>
        <Error>This is an error!</Error>
        <LinkToPage>
          Don't have an account ? <Link to="register">Register</Link>
        </LinkToPage>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #b9e7e7;
`;
const Header = styled.h1`
  font-size: 20px;
  color: teal;
  margin-bottom: 20px;
`;

const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 200px;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid gray;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const LinkToPage = styled.span`
  font-size: 12px;
  text-align: center;
`;

const Error = styled.p`
  font-size: 12px;
  color: red;
  text-align: center;
`;

export default Login;