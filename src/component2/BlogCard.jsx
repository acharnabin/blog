import { Button } from "@material-ui/core";
import React, { Suspense } from "react";
import "../css2/project.css";
import Loading from "./Loading";
import DOMPurify from "dompurify";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  return (
    <Suspense fallback={<Loading />}>
      <div
        className="project_item m-2"
        style={{ backgroundColor: `${props.color}` }}
      >
        <img className="card-img-top" src={props.image} alt="" />

        <div className="card-body">
          <h5 className="project_card-title">{props.title}</h5>
         
          <div className="card_links">
            <Link to={`/BlogDetails/${props.title}`} style={{textDecoration: "none"}}>
              <Button
                startIcon={<IoArrowForwardCircleSharp />}
                variant="contained"
                style={{
                  backgroundColor: "#1EA5FC",
                  color: "white",
                  letterSpacing: "1px",
                  padding: "10px 20px",
                  margin: "2px",
                  
                }}
              >
                Know More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default BlogCard;
