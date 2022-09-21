import { combineReducers } from "redux";
import { blogReducer,blogDetailReducer,blogCategoryReducer,addPostReducer } from "./blogReducer";

const reducersApi =combineReducers({
    allBlog: blogReducer,
    blogDetail:blogDetailReducer,
    blogCategory :blogCategoryReducer,
    addPost :addPostReducer
});

export default reducersApi;