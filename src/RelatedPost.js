import React, {useEffect } from 'react'
//import { useGetBlogByCategoryQuery } from './services/post';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { reletedPost } from './redux/actions/action';

const RelatedPost = () => {
  let params = useParams();
  const relatedPost = useSelector((state) => state.blogCategory)
  const { category } = useParams();
  console.log(relatedPost)
  const dispatch = useDispatch();
  console.log(category);
  const fetchBlogCategory = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/api/relatedBlog/${category}`).catch(err => {
      console.log(err);
    });
    dispatch(reletedPost(response))
  };
  useEffect(() => {
    if (category && category !== "") fetchBlogCategory();
  }, [category])


  return (
    <>
      <div className="blog-content-6">
      <h3>Related Post </h3>
      {relatedPost.data != null ? relatedPost.data.map((user, i) => (
        <div>
       
            <div className="content-select">
              <div className="img-1">
              <img  height={100} width={200} src={user.img_url} className="img-fluid" />
              </div>
              <div className="content-hit">
                <h6>{user.by_Category}</h6>
                <p>{user.desc.substring(0, 100)}...</p>
                <a href={"/blogdetail/" + user.id + '/' + user.by_Category}>Learn More<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
          <hr />
        </div>
        ))
        :
        <>No Record Found  </>
      }
      </div>
    </>
  )
}

export default RelatedPost