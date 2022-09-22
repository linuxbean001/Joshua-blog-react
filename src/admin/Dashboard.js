import React, { useEffect, useState ,useRef} from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { setBlog } from '../redux/actions/action'

const Dashboard = () => {
    const hiddenFileInput = React.useRef();
    const blog = useSelector((state) => state.allBlog.blog);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const updtePost = async (data) => {
        // const body = {
        //     "title": data.title,
        //     "desc": data.desc,
        //     "by_Category": data.by_Category,
        //     "by_Author": data.by_Author,
        //     "img_url": data.img_url[0].name
        // }
        // console.log(body);
        const formData = new FormData();
        formData.append('img_url', hiddenFileInput.current.files[0]);
        formData.append("desc", data.desc);
        formData.append("title", data.title);
        formData.append("by_Category", data.by_Category);
        formData.append("by_Author", data.by_Author);
        // formData.append("img_url", data.img_url);
         console.log("formdata",formData)
        const requestOptions = {
            method: 'POST',
            headers: { "Content-type": "multipart/form-data"},
            body: formData,
            mode: 'no-cors',
            
               };
        fetch('http://127.0.0.1:8000/api/addpost', requestOptions)
            .then(response => response.json()).catch(error => {
             console.log(error);
         });
                
                ;
    }
    
    const dispatch = useDispatch();
    const fetchBlog = async () => {
      const respone = await axios.get("http://127.0.0.1:8000/api/data").catch((err) => {
        console.log("err", err)
      });
      dispatch(setBlog(respone.data))
    };
    useEffect(() => {
      fetchBlog();
    }, []);
  
    if (blog.isLoading) return <><h4>Loading...</h4></>
    if (blog.isError) return <><h2>An error occured {blog.error.error}</h2></>
    const handleClick = event => {
        hiddenFileInput.current.click();
      };
    return (
        <>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand ps-3" href="/">Blog Post</a>
                <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                        <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                    </div>
                </form>
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to={"/admin"}>Logout</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading"></div>
                                <Link className="nav-link" to={"/dashboard"}>
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Posts
                                </Link>
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            Blog Post
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-4">Post</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">Post</li>
                            </ol>
                            <div className="card mb-4">
                                <div className="card-header">
                                    <i className="fas fa-table me-1"></i>
                                    Post Data
                                    <Link data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary float-right" to={"/dashboard/"}>Add Post</Link>
                                </div>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Add Post</h5>
                                            </div>
                                            <div class="modal-body">
                                                <form onSubmit={handleSubmit(updtePost)}>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" type="text" placeholder="title"   {...register("title", { required: "Please enter your title." })} />
                                                        {errors.title ? (
                                                            <>
                                                                {errors.title.type === "required" && (
                                                                    <p className="errorMessage">
                                                                        {errors.title.message}
                                                                    </p>
                                                                )}
                                                            </>
                                                        ) : null}
                                                        <label htmlFor="inputEmail">Title</label>
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
                                                        {/* <input class="form-control" name="img_url"   {...register("img_url", { required: "Please enter your img_url." })} type="file"  id="formFile" /> */}
                                                        <div className='profileboxfooter'>
                  <Link to='#' onClick={handleClick}>Upload Picture</Link>
                  <input
                    type="file"
                    name="img_url" 
                    ref={hiddenFileInput}
                    // onChange={handleChange}
                    style={{ display: 'none' }}
                  />
                </div>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" type="text" placeholder="Authore" name="by_Author"  {...register("by_Author", { required: "Please enter authore name." })} />
                                                        <label htmlFor="inputPassword">Authore</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" type="text" placeholder="Category" name="by_Category"  {...register("by_Category", { required: "Please enter category name." })} />
                                                        <label htmlFor="inputPassword">Category</label>
                                                    </div>
                                                    <input type="submit" className="btn btn-primary" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <table id="datatablesSimple" className="dataTable-table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Category</th>
                                                <th>Created</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Category</th>
                                                <th>Created</th>
                                                <th>Options</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                        {blog.map((item)=>{return(
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.desc}</td>
                                                <td>{item.by_Category}</td>
                                                <td>{ (item.created_at) ? moment(item.created_at).format("DD MMMM") : ""}</td>
                                                <td>
                                                    <Link className="btn btn-primary" to="#"><i className="fas fa-edit"></i></Link>
                                                    <Link className="btn btn-primary ml-1" to="#"><i className="fas fa-trash"></i></Link>
                                                </td>
                                            </tr>
                                        )})}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright &copy; Your Website 2022</div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Dashboard