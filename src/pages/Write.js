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
          <ReactQuill style={{ "height": "100%", "border": "none" }} theme="snow" value={value} onChange={setValue} />
        </EditorContainer>
      </Content>
      <Menu>
        <MenuItem>
          <MenuItemTitle>Publish</MenuItemTitle>
          <span><b>Status: </b>Draft</span>
          <span><b>Visibility: </b>Public</span>
          <MenuItemInput type="file" id="file" name="" />
          <MenuItemLabel htmlFor="file">Upload Image</MenuItemLabel>
          <Buttons>
            <button>Save as a draft</button>
            <button>Publish</button>
          </Buttons>
        </MenuItem>
        <MenuItem>
          <MenuItemTitle>Category</MenuItemTitle>
          <Category>
            <input type="radio" name="cat" value="art" id="art"></input>
            <label htmlFor="cat">Art</label>
          </Category>
          <Category>
            <input type="radio" name="cat" value="science" id="science"></input>
            <label htmlFor="science">Science</label>
          </Category>
          <Category>
            <input type="radio" name="cat" value="technology" id="technology"></input>
            <label htmlFor="technology">Technology</label>
          </Category>
          <Category>
            <input type="radio" name="cat" value="cinema" id="cinema"></input>
            <label htmlFor="cinema">Cinema</label>
          </Category>
          <Category>
            <input type="radio" name="cat" value="design" id="design"></input>
            <label htmlFor="design">Design</label>
          </Category>
          <Category>
            <input type="radio" name="cat" value="food" id="food"></input>
            <label htmlFor="food">Food</label>
          </Category>
        </MenuItem>
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
  height: 350px;
  overflow: scroll;
  border: 1px solid lightgray;
`;

const Menu = styled.div` 
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MenuItem = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  color: #555;
`;

const MenuItemTitle = styled.h1`
  font-size: 20px;
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

const Category = styled.div` 
   display: flex;
   align-items: center;
   gap: 2px;
   color: teal;
`;

export default Write;