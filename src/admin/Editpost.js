import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { setBlog, addBlog } from '../redux/actions/action'
import ReactPaginate from "react-paginate"

const EditPost = ({closeMoadal}) => {
    const hiddenFileInput = React.useRef();
    const blog = useSelector((state) => state.allBlog.blog);
    const [pageNumber, setPageNumber] = useState(0)
    const blogPerPage = 3
    const pagesVisited = pageNumber * blogPerPage
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
   
    
   

  
    if (blog.isLoading) return <><h4>Loading...</h4></>
    if (blog.isError) return <><h2>An error occured {blog.error.error}</h2></>

    return (
        <div>
            <div class="modal-dialog" role="document" className='modalBackground'>
                <div class="modal-content" className='modalContainer'>
                    <div class="modal-header">
                        <h5 class="modal-title" >Edit Post</h5>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input className="form-control" type="text" placeholder={"edit title"}  {...register("title", { required: "Please enter your title." })} />
                                {errors.title ? (
                                    <>
                                        {errors.title.type === "required" && (
                                            <p className="errorMessage">
                                                {errors.title.message}
                                            </p>
                                        )}
                                    </>
                                ) : null}
                                <label htmlFor="inputEmail"> Edit Title</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" type="text" name="desc" placeholder="Description"   {...register("desc", { required: "Please enter your description ." })} />
                                <label htmlFor="inputPassword">Description</label>
                                {errors.desc ? (
                                    <>
                                        {errors.title.type === "required" && (
                                            <p className="errorMessage">
                                                {errors.desc.message}
                                            </p>
                                        )}
                                    </>
                                ) : null}
                            </div>
                            <div className="form-floating mb-3">
                                <label for="formFile" class="form-label"></label>

                                <Link to='#' onClick={handleClick}>Upload Picture</Link>
                                <input
                                    type="file"
                                    ref={hiddenFileInput}
                                    name="img_url"
                                    style={{ display: 'none' }}
                                />

                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" type="text" placeholder="Authore" name="by_Author"  {...register("by_Author", { required: "Please enter authore name." })} />
                                <label htmlFor="inputPassword">Authore</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" type="text" placeholder="Category" name="by_Category"  {...register("by_Category", { required: "Please enter category name." })} />
                                <label htmlFor="inputPassword">Category</label>
                            </div>
                            <button type="submit" className="btn btn-primary" ></button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default EditPost