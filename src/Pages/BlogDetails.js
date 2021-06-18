import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import "../css2/blogdetails.css";
import { Grid,Container } from "@material-ui/core";
import DOMPurify from "dompurify";

const BlogDetails = (props) => {
  const blogs = useSelector((state) => state.addBlog);

  const { blogItem } = blogs;
  const title = props.match.params.title;

  var item = blogItem.find(function (post, index) {
    if (post.title === title) return true;
  });
  // const [convertedContent, setConvertedContent] = useState(item.convertedContent);
  
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  useEffect(() => {}, []);
  return (
    <Layout>
      <Grid  item container direction="row">
      <Container className="blogDetails" maxWidth="md">
      <h3>{item.title}</h3>
        <img
          src={item.imagelink}
          alt={item.title}
        />
        
        <div className="preview" dangerouslySetInnerHTML={createMarkup(item.convertedContent)}></div>
        
      </Container>
        
      </Grid>
    </Layout>
  );
};

export default BlogDetails;
