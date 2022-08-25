import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Home'
import BlogDetail from './BlogDetails';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogdetail" element={<BlogDetail/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App