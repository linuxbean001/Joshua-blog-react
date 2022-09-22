import { combineReducers } from "redux";
import { addBlog } from "../actions/action";
import { blogReducer,blogDetailReducer,blogCategoryReducer,addPostReducer,addBlogReducer } from "./blogReducer";

const reducersApi =combineReducers({
    allBlog: blogReducer,
    blogDetail:blogDetailReducer,
    blogCategory :blogCategoryReducer,
    addPost :addPostReducer,
    addBlog:addBlogReducer
});

export default reducersApi;