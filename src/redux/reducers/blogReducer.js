import { ActionTypes } from "../constant/action_type";

const initialState = {
    blog: []
};

export const blogReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_BLOG:
            return { ...state, blog: payload };
        default:
            return state;
    }
};

export const blogDetailReducer = (state = {}, { type, payload }) => {
    switch (type) {

        case ActionTypes.BLOG_DETAIL:
            return { ...state, ... payload };
        default:
            return state;
    }
};


export const blogCategoryReducer= (state = {}, { type, payload }) => {
    switch (type) {

        case ActionTypes.RELETED_BLOG:
            return { ...state, ... payload };
        default:
            return state;
    }
};


export const addPostReducer= (state = {}, { type, payload }) => {
    switch (type) {

        case ActionTypes.ADD_POST:
            return { ...state, ... payload };
        default:
            return state;
    }
};
export const addBlogReducer= (state = {}, { type, payload }) => {
    switch (type) {

        case ActionTypes.ADD_BLOG:
            return { ...state, ... payload };
        default:
            return state;
    }
};