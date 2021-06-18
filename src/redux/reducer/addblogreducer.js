import { addblogConstants } from "../action/actionTypes";

const initdata = {
  blogItem: [],
  loading: false,
  message: "",
};

export const addblogReducer = (state = initdata, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case addblogConstants.ADD_BLOG_REQUEST:
      state = { ...state, loading: true };
      break;
    case addblogConstants.ADD_BLOG_SUCCESS:
      state = {
        ...state,
        blogItem: [...state.blogItem, action.payload],
        loading: false,
        message: "Blog created",
      };
      break;
    case addblogConstants.ADD_BLOG_FAILED:
      state = { ...state, loading: false, message: "Something went wrong" };
      break;
    case addblogConstants.GET_BLOG_SUCCESS:
    
      state = {
        ...state,
        blogItem: [...state.blogItem, action.payload],
        loading: false,
      };
      break;
  }
  return state;
};
