import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";


const Write = () => {

  // Check if there is a state (post). 
  // if there is a state this mens it was redirected by clicking edit button on the single post page. 
  // if there no state this means it was redirected from by clicking write (new post).

  const state = useLocation().state;

  const [value, setValue] = useState(state?.descr || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const handleClick = async e => {
    e.preventDefault();

    // FIREBASE UPLOAD

    const fileName = new Date().getTime() + file.name;
    console.log("File Name:  " + fileName)
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

          console.log('File available at', downloadURL);

          try {

            // If there is a state --> Update post
            if (state) {
              await axios.put(`${process.env.REACT_APP_BASE_URL}/posts/${state.id}`, {
                title: title,
                descr: value,
                img: file ? downloadURL : "",
                cat: cat,
              }, { withCredentials: true }); // withCredentials: true is needed to send the cookie to backend
            }

            // If there is no state --> New post 
            else {
              await axios.post(`${process.env.REACT_APP_BASE_URL}/posts`, {
                title: title,
                descr: value,
                img: file ? downloadURL : "",
                cat: cat,
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
              }, { withCredentials: true }); // withCredentials: true is needed to send the cookie to backend  
            }

            navigate("/");

          } catch (err) {
            console.log(err);
          }
        });
      }
    );



  }

  return (
    <Container>
      <Content>
        <Input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <EditorContainer>
          <ReactQuill style={{ "height": "100%", "border": "none" }} theme="snow" value={value} onChange={setValue} />
        </EditorContainer>
      </Content>
      <Menu>
        <MenuItem>
          <MenuItemTitle>Publish</MenuItemTitle>
          <span><b>Status: </b>Draft</span>
          <span><b>Visibility: </b>Public</span>
          <MenuItemInput type="file" id="file" name="" onChange={(e) => setFile(e.target.files[0])} />
          <MenuItemLabel htmlFor="file">Upload Image</MenuItemLabel>
          <Buttons>
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </Buttons>
        </MenuItem>
        <MenuItem>
          <MenuItemTitle>Category</MenuItemTitle>
          <Category>
            <input type="radio" checked={cat === "art"} name="cat" value="art" id="art" onChange={(e) => setCat(e.target.value)}></input >
            <label htmlFor="cat">Art</label>
          </Category>
          <Category>
            <input type="radio" checked={cat === "science"} name="cat" value="science" id="science" onChange={(e) => setCat(e.target.value)}></input>
            <label htmlFor="science">Science</label>
          </Category>
          <Category>
            <input type="radio" checked={cat === "technology"} name="cat" value="technology" id="technology" onChange={(e) => setCat(e.target.value)}></input>
            <label htmlFor="technology">Technology</label>
          </Category>
          <Category>
            <input type="radio" checked={cat === "cinema"} name="cat" value="cinema" id="cinema" onChange={(e) => setCat(e.target.value)}></input>
            <label htmlFor="cinema">Cinema</label>
          </Category>
          <Category>
            <input type="radio" checked={cat === "design"} name="cat" value="design" id="design" onChange={(e) => setCat(e.target.value)}></input>
            <label htmlFor="design">Design</label>
          </Category>
          <Category>
            <input type="radio" checked={cat === "food"} name="cat" value="food" id="food" onChange={(e) => setCat(e.target.value)}></input>
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