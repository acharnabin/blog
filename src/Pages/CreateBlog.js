import React, { useState } from "react";
import Layout from "./Layout";
import "../css2/createBlog.css";
import { Grid, TextField, Button, Paper, Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { IoAddCircle } from "react-icons/io5";
import { createBlogAction } from "../redux/action/createblogaction";
import { v4 as uuidv4 } from "uuid";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";

const CreateBlog = () => {
  const [title, settitle] = useState("");
  const [imagelink, setimagelink] = useState("");

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  // const [image, setimage] = useState(null);

  const id = uuidv4();
  const [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };
 
  // const handleImage = (e) => {
  //   setimage(e.target.files[0]);
  // };

  const dispatch = useDispatch();

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(editorState);
    console.log(editorState)
    const blog = {
      id,
      title,
      imagelink,
      convertedContent,
    };

    dispatch(createBlogAction(blog))
    alert('Blog created');
    setimagelink('');
    settitle('');
    setEditorState();
  };
  return (
    <Layout>
      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Container maxWidth="md">
          <Paper className="create_blog_container">
            <h5>Create New Blog</h5>

            <form className="create_blog_form" onSubmit={handleSubmit}>
              <div style={{ width: "200px" }}></div>
              <TextField
                style={{ margin: "3px 0px" }}
                required
                fullWidth
                label="title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
              />
              <TextField
                style={{ margin: "3px 0px" }}
                required
                fullWidth
                label="Image link"
                value={imagelink}
                onChange={(e) => setimagelink(e.target.value)}
              />

              {/* <input
              required
              fullWidth
              type="file"
              onChange={handleImage}
              placeholder="add images"
            /> */}

              <Editor
                style={{ margin: "3px 0px" }}
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                toolbarStyle={{ backgroundColor: "#bbdefb" }}
                editorStyle={{ backgroundColor: "#f5f5f5" }}
                toolbar={{
                  inline: { inDropdown: true },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: true },
                  
                }}
              />

              <Button
                varint="contained"
                startIcon={<IoAddCircle />}
                style={{
                  backgroundColor: "#005BFF",
                  width: "150px",
                  letterSpacing: "2px",
                  padding: "10px 20px",
                  margin: "4px 0px",
                  alignSelf: "flex-end",
                  color: "white",
                  borderRadius: "5px",
                }}
                type="submit"
              >
                POST
              </Button>
            </form>
            
          </Paper>
        </Container>
      </Grid>
    </Layout>
  );
};

export default CreateBlog;
