import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <Container>
      <Content>
        <Input type="text" placeholder="Title" />
        <EditorContainer>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </EditorContainer>
      </Content>
      <Menu>
        <MenuItem>
          <MenuItemTitle>Publish</MenuItemTitle>
          <MenuItemSpan><b>Status: </b>Draft</MenuItemSpan>
          <MenuItemSpan><b>Visibility: </b>Public</MenuItemSpan>
          <MenuItemInput type="file" id="file" name="" />
          <MenuItemLabel htmlFor="file">Upload Image</MenuItemLabel>
          <Buttons>
            <button>Save as a draft</button>
            <Button>Publish</Button>
          </Buttons>
        </MenuItem>
        <MenuItem>Item 2</MenuItem>
      </Menu>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

const Content = styled.div` 
  flex: 5;
  display: flex;
  flex-direction: column;
  gap:20px
`;

const Input = styled.input` 
  padding: 10px;
  border: 1px solid lightgray;
`;

const EditorContainer = styled.div` 
  height: 300px;

`;

const Menu = styled.div` 
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MenuItem = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  justify-content: space-between;
  font-size: 12px;
  columns: #555;
`;

const MenuItemTitle = styled.h1`
  font-size: 20px;
`;

const MenuItemSpan = styled.span` 
`;

const MenuItemInput = styled.input` 
  display: none;
`;

const MenuItemLabel = styled.label` 
  text-decoration: underline;
  cursor: pointer;
`;



const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

   > * {
    &:first-child {
      cursor: pointer;
      color: teal;
      background-color: white;
      border: 1px solid teal;
      padding: 3px 5px;
    }
    :last-child{
              cursor: pointer;
              color: white;
              background-color: teal;
              border: 1px solid teal;
              padding: 3px 5px;
            }
   }
`;


const Button = styled.button` 
`;





export default Write