import React, { useState, useMemo, useEffect } from 'react'
import { BrowserRouter , Routes , Route ,useParams } from 'react-router-dom'
import Home from './Home'
import BlogDetail from './BlogDetails';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';

const App = () => {
  let parmas =useParams();
  
  return (
    <>
    <BrowserRouter>
      <Routes  forceRefresh={true}>
        <Route path="/" element={<Home/>}/>
        <Route path='/blogdetail/:id/:category' element={<BlogDetail/>}/>
        <Route path='/admin' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App