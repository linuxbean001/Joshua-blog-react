import React from 'react'
import { Link } from "react-router-dom";
import background from './images/bg-hit.png';
import { useGetAllPostQuery } from './services/post';
const Home = () => {
    const respon = useGetAllPostQuery();
   // console.log("response:", respon.data);
    if (respon.isLoading) return <><h4>Loading...</h4></>
    if (respon.isError)return <><h2>An error occured {respon.error.error}</h2></> 
    const myStyle = {
        backgroundImage: `linear-gradient( to bottom, #0b1216c9, #0b1216fc ), url("${background}")`
      };
     const login = () =>{
        // <Redirect to="/blogdetail" />
        window.location.href = "/blogdetail";
      }
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
                {respon.data.map((user , i) => (

                        <div className="col-md-4 pd-3" key={i}>
                        <div className="blog-content-1" onClick={()=>{login()}}  >
                          <img src="images/img-4.png"  className="img-fluid" alt="img" />
                          <span>Bookscribs Blog</span>
                          <h2>{user.title}</h2>
                          <div className="icon-1">
                            <p><i className="fa fa-calendar" aria-hidden="true"></i>27 October</p>
                            <p><i className="fa fa-eye" aria-hidden="true"></i>8 Min Read</p>
                          </div>
                          <p>{user.desc} <Link to="#">Veiw More</Link></p>
                        </div>
                        </div>
                ))}  
          </div>
          <div className="row pd-3">
            <div className="col-md-12">
              <ul id="breadcrumbs">
                <li><Link to="#">1</Link></li>
                <li><Link to="#">2</Link></li>
                <li><Link to="#">3</Link></li>
                <li><Link to="#">..</Link></li>
                <i className="fa fa-angle-right icon-2" aria-hidden="true"></i>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home