import { combineReducers } from "redux";
import { blogReducer,blogDetailReducer,blogCategoryReducer } from "./blogReducer";

const reducersApi =combineReducers({
    allBlog: blogReducer,
    blogDetail:blogDetailReducer,
    blogCategory :blogCategoryReducer 
});

export default reducersApi;