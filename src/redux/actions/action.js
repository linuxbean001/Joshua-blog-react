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