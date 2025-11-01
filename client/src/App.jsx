import { Routes, Route } from 'react-router'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import AddPost from './AddForm/AddPost'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path='add-post' element={<AddPost/>}/>
      </Route>
    </Routes>
  )
}

export default App
