import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/authContext";

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState("");

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  }

  return (
    <Container>
      <Header>Login</Header>
      <Form>
        <Input required type="text" placeholder="username" name="username" onChange={handleChange} />
        <Input required type="password" placeholder="password" name="password" onChange={handleChange} />
        <Button onClick={handleSubmit}>Login</Button>
        {err && <Error>{err}</Error>}
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