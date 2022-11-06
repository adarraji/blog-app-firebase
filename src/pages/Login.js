import React from "react";
import styled from "styled-components";


const Login = () => {
  return (
    <Container>
      <Header>Login</Header>
      <Form>
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Login</Button>
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
  padding: 10px;
  width: 200px;
  gap: 20px;
`;

const Input = styled.input``;

const Button = styled.button``;

export default Login;