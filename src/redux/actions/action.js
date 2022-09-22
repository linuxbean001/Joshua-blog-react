import BlogDetails from '../../BlogDetails';
import {ActionTypes} from '../constant/action_type'
export const setBlog =(blog)=>{
    return{
        type:ActionTypes.SET_BLOG,
         payload: blog,
    };
};
export const fetchDetail =(blogDetail)=>{
    return{
        type:ActionTypes.BLOG_DETAIL,
         payload: blogDetail,
    };
};
export const reletedPost =(reletedCategory)=>{
    return{
        type:ActionTypes.RELETED_BLOG,
         payload: reletedCategory,
    };
};
export const addPost =(addPost)=>{
    return{
        type:ActionTypes.ADD_POST,
         payload: addPost,
    };
};
export const addBlog =(addBlog)=>{
    return{
        type:ActionTypes.ADD_BLOG,
         payload: addBlog,
    };
};
