import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import "./App.css";
import Loading from "./component2/Loading";
import { getBlogs } from "./redux/action/createblogaction";


const BlogPage = lazy(() => import("./Pages/BlogPage"));
const CreateBlog = lazy(() => import("./Pages/CreateBlog"));
const BlogDetails = lazy(() => import("./Pages/BlogDetails"));
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <div className="app">
        {/* <Navbar/> */}
        <div className="app_content">
          <Switch>
            <Suspense>
              <Suspense fallback={<Loading />}>
                <Route exact path="/" component={BlogPage} />
              </Suspense>

             
              <Suspense fallback={<Loading />}>
                <Route exact path="/newBlog" component={CreateBlog} />
              </Suspense>
              <Suspense fallback={<Loading />}>
                <Route path="/BlogDetails/:title" component={BlogDetails} />
              </Suspense>
            </Suspense>
          </Switch>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
