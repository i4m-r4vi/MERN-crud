import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route,BrowserRouter} from 'react-router'
import AddPost from '/components/addPost.jsx'
import ListPost from '/components/ListPost.jsx'
import UpdatePost from '/components/updatePost.jsx'
import NotFound from '/components/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<ListPost />}/>
      <Route path='/addpost' element={<AddPost />}/>
      <Route path='/updatepost/:id' element={<UpdatePost/> }/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
)
