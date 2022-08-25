import React from 'react'
import { Link } from "react-router-dom";
import background from './images/bg-hit.png';
import RelatedPost from './RelatedPost';
// console.log(MyBackgroundImage);


 
const BlogDetails = () => {
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
            <li><Link to="#">Home</Link></li>
            <li><Link to="blog.html">Blog</Link></li>
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
          <h2>Top Bookscribs 2021 Adaptation Recommendations</h2>
          <span>by Molly Jackman & Meghana Reddy Image for post</span>
          <img src="images/img-10.png" alt="img" className="img-fluid"/>
          <p>The importance and value of writing consistently—using consistent pronouns, punctuation, and following a specific style guide—is introduced in an academic setting. For years, we learn to follow grammatical best practices for writing the English language. And it can be tricky, given that the English language is full of exceptions and inconsistencies, and tends to break its own rules. “I” comes before “e” except after “c”… except when it doesn’t. Weird. </p>
          <h3>What is the age requirements for Harry Potter books</h3>
          <p>While there is no right or wrong age to start reading the Harry Potter books, there are some guidelines for parents. Kids from ages 7 to 9 are okay to start reading the first few books.</p><p>Harry Potter is 11 years old in the first book and 17 years old in the last book. It may be a good idea to align the books to your child’s age. The later books in the series get darker and longer.</p><p>Following is a list of books and corresponding movies in order of their release. I prepared this list for my daughter, now 8, and thought to share with others.</p>
          <h4>We use the catch-all titles of Analytics and Visualization Engineers so as to not get too hung up on specific credentials. Instead, people are empowered to leverage their unique skills to make Bookscribe better.</h4>
          <h3>Introducing Analytics at bookscribe</h3>
          <p>Whether you’re a data professional, student, or Bookscribs enthusiast, we invite you to meet our stunning colleagues and hear their stories. If this series resonates with you and you’d like to explore opportunities with us, check out our analytics site, search open roles, and learn about our culture.</p>
          <h3>What’s the purpose of the analytics role at Bookscribe?</h3>
          <p>When you think about data at Bookscribe, what comes to mind? Oftentimes it is our content recommendation algorithm or the online delivery of video to your device at home. Both are integral parts of the business, but far from the whole picture</p>
          <p>Our Analytics and Visualization Engineers are taking on these and other big questions for the company, informing decision-making across every corner of the business</p>
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
                <input type="text" className="form-control" id="usr" placeholder="Name"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input type="email" className="form-control" id="pwd"  placeholder="Email"/>
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
            <img src="images/img-11.png" alt="img" className="img-fluid"/>
            <h2>Bookscribs Blog</h2>
          </div>
          <p>Discover, analyze, and adapt stories on-demand.With Bookscribs, every author, agent, publisher, and media producer can redefine the storytelling experience.</p>
          <hr/>
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
              <img src="images/img-12.png" alt="img" className="img-fluid"/>
          </div>
        </div>
        <RelatedPost/>
        
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