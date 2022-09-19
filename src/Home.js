import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import background from './images/bg-hit.png';
import moment from 'moment'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setBlog } from './redux/actions/action'
import ReactPaginate from "react-paginate"

const Home = () => {
  const blog = useSelector((state) => state.allBlog.blog);
  const [pageNumber, setPageNumber] = useState(0)
  const blogPerPage = 3
  const pagesVisited = pageNumber * blogPerPage
  const displayBlog = blog.slice(pagesVisited, pagesVisited + blogPerPage).map((user) => {
    return (
      <div className="col-md-4 pd-3" >
        <div className="blog-content-1"   >
          <img height={400} width={300} src={user.img_url} />
          <span>{user.by_Category}</span>
          <h2>{user.title}</h2>
          <div className="icon-1">
            <p><i className="fa fa-calendar" aria-hidden="true"></i>{ (user.created_at) ? moment(user.created_at).format("DD MMMM") : ""}</p>
            <p><i className="fa fa-eye" aria-hidden="true"></i>8 Min Read</p>
          </div>
          < p >{user.desc.substring(0, 200)} <Link to={"/blogdetail/" + user.id + '/' + user.by_Category}>Veiw More</Link></p>
        </div>
      </div>
    )
  })
  const pageCount = Math.ceil(blog.length / blogPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected)
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
  const myStyle = {
    backgroundImage: `linear-gradient( to bottom, #0b1216c9, #0b1216fc ), url("${background}")`
  };
  return (
    <>
      <section className="bg-1" style={myStyle} >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-head">
                <h1>Welcome to our Blog </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pd-1 pd-2 bg-2">
        <div className="container">
          <div className="row">
            {displayBlog}
          </div>
          <div className="row pd-3">
            <div className="col-md-12">
              <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttns"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginatiionActive"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home