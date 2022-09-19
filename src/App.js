import React, { useState, useMemo, useEffect } from 'react'
import { BrowserRouter , Routes , Route ,useParams } from 'react-router-dom'
import Home from './Home'
import BlogDetail from './BlogDetails';

// import Paginate from './pagination/Paginate';
const App = () => {
  let parmas =useParams();
  
  return (
    <>
    <BrowserRouter>
      <Routes  forceRefresh={true}>
        <Route path="/" element={<Home/>}/>
         <Route path='/blogdetail/:id/:category' element={<BlogDetail/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App