import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
//import { useGetBlogByCategoryQuery } from './services/post';
// import { useParams } from "react-router-dom";
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { reletedPost } from './redux/actions/action';


const Dashboard = () => {
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
                                                <form>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" type="text" placeholder="Title" />
                                                        <label htmlFor="inputEmail">Title</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" type="text" placeholder="Description" />
                                                        <label htmlFor="inputPassword">Description</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <label for="formFile" class="form-label"></label>
                                                        <input class="form-control" name="img_url" type="file" id="formFile" />
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" type="text" placeholder="Authore" />
                                                        <label htmlFor="inputPassword">Authore</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" type="text" placeholder="Category" />
                                                        <label htmlFor="inputPassword">Category</label>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                        <button className="btn btn-primary" type="submit">Save</button>
                                                    </div>
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
                                            <tr>
                                                <td>1</td>
                                                <td>Top Bookscribs 2921 Adaptation Recommendations</td>
                                                <td>test</td>
                                                <td>BookScribe</td>
                                                <td>2022-09-06 18:05:24</td>
                                                <td>
                                                    <Link className="btn btn-primary" to="#"><i className="fas fa-edit"></i></Link>
                                                    <Link className="btn btn-primary ml-1" to="#"><i className="fas fa-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Top Bookscribs 2921 Adaptation Recommendations</td>
                                                <td>test</td>
                                                <td>BookScribe</td>
                                                <td>2022-09-06 18:05:24</td>
                                                <td>
                                                    <Link className="btn btn-primary" to="#"><i className="fas fa-edit"></i></Link>
                                                    <Link className="btn btn-primary ml-1" to="#"><i className="fas fa-trash"></i></Link>
                                                </td>
                                            </tr>
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