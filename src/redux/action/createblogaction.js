import { addblogConstants } from "./actionTypes";


export const createBlogAction = (payload) => {
 

  return async (dispatch) => {
    dispatch({ type: addblogConstants.ADD_BLOG_REQUEST });

    dispatch({ type: addblogConstants.ADD_BLOG_SUCCESS, payload: payload });

    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    blogs.push(payload);
    localStorage.setItem("blogs", JSON.stringify(blogs));
  };
};

export const getBlogs = () => {
  return (dispatch) => {
    let blogItems = localStorage.getItem("blogs")
      ? JSON.parse(localStorage.getItem("blogs"))
      : null;

    if (blogItems) {
      blogItems.forEach((item) => {
        dispatch({ type: addblogConstants.GET_BLOG_SUCCESS, payload: item });
      });
    }
  };
};
