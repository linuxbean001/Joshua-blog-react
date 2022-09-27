import React, { useState, useEffect } from 'react'
import { useParams, } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';
import background from './images/bg-hit.png';
import { useDispatch, useSelector } from 'react-redux';
import RelatedPost from './RelatedPost';
import { fetchDetail } from './redux/actions/action';

const BlogDetails = () => {
  const blogDetail = useSelector((state) => state.blogDetail)
  console.log(blogDetail);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  const fetchBlogDetail = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/api/blogDetail/${id}`).catch(err => {
    });
    dispatch(fetchDetail(response.data))
  };
  useEffect(() => {
    if (id && id !== "") fetchBlogDetail();
  }, [id])


  const myStyle = {
    backgroundImage: `linear-gradient( to bottom, #0b1216c9, #0b1216fc ), url("${background}")`
  };

  return (
    <>
      <section className="bg-1" style={myStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-head">
                <h1>Blog Details</h1>
                <ul id="breadcrumb">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="#">Blog-detail</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pd-1 pd-2 bg-2">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="blog-content-2">
                <h2>{blogDetail.title}</h2>
                <span>by {blogDetail.by_Author}</span>
                <img height={400} width={600} src={`http://127.0.0.1:8000`+blogDetail.img_url} />
                <p>{blogDetail.desc}</p>
                <h3>Tags:</h3>
                <div className="tages">
                  <Link to="#">BookScribs</Link>
                  <Link to="#">Movie</Link>
                  <Link to="#">Story Discover</Link>
                  <Link to="#">Story Adaption</Link>
                </div>
              </div>
              <div className="blog-content-3">
                <h3>Leave comment</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" id="usr" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" className="form-control" id="pwd" placeholder="Email" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                </div>
                <Link to="#" type="submit" className="btn btn-2">Submit</Link>
              </div>
            </div>

            <div className="col-md-5">
              <div className="blog-content-4">
                <div className="select-1">
                  <img src={blogDetail.img_url} height={150} width={150} alt="img" className="img-fluid" />
                  <h2>Bookscribs Blog</h2>
                </div>
                <p>Discover, analyze, and adapt stories on-demand.With Bookscribs, every author, agent, publisher, and media producer can redefine the storytelling experience.</p>
                <hr />
                <div className="span-2">
                  <span><i className="fa fa-eye" aria-hidden="true"></i>85</span>
                  <span><i className="fa fa-comment-o" aria-hidden="true"></i>05</span>
                  <span><i className="fa fa-bookmark-o" aria-hidden="true"></i>03</span>
                </div>
              </div>
              <div className="blog-content-5">
                <div className="select-2">
                  <h3>Answer to most frequent questions?</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable.</p>
                  <Link to="#" className="btn-3">Get Started</Link>
                </div>
                <div className="img-5">
                  <img src={blogDetail.img_url} height={140} width={160} alt="img" className="img-fluid" />
                </div>
              </div>
              <RelatedPost />

              <div className="content-hit-1">
                <h3>Share Post</h3>
                <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                <Link to="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link>
                <Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pd-6">
        <div className="container">
          <div className="row bg-hit" >
            <div className="col-md-8">
              <div className="context">
                <h2>Intrested in Bookscribs technology?</h2>
                <p>seeking an efficient and reliable screenwriting agency, contact us today for additional information.</p>
              </div>
            </div>
            <div className="col-md-4">
              <Link to="#" className="btn-5">Contact Us</Link>
              <Link to="#" className="btn-4">Discover Stories</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetails