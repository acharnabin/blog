import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import BlogCard from "../component2/BlogCard";
import "../css2/blogpage.css";

const BlogPage = () => {
  const blogs = useSelector((state) => state.addBlog);
  const { blogItem } = blogs;
  useEffect(() => {
    console.log(blogItem)
  }, []);
  return (
    <Layout>
      <Grid container direction="column">
        <Grid item>
          <div className="blogpage">
            <h3>Recent Blogs</h3>
            <div className="blogcard_container">
              {blogItem.length ? (
                blogItem.map((item, index) => {
                  return (
                    <BlogCard
                      key={item.index}
                      id={item.id}
                      title={item.title}
                      image={item.imagelink}
                      desc={item.convertedContent}
                    />
                  );
                })
              ) : (
                <p style={{textAlign:'center',fontSize:'20px',color:'#424242'}}>No Blogs .Please first add a blog .</p>
              )}
              {}
            </div>
          </div>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Layout>
  );
};

export default BlogPage;
