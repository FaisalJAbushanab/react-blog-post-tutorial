import {React} from 'react';
import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import EditPost from './EditPost';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
      <Route path="/" element={<Layout 
      />}>
        <Route index element={
        <Home 
        />} />
      <Route path="post">
        <Route index element={
          <NewPost
          />
        } />
        <Route path=":id" element={<PostPage 
          />} />
        <Route path="edit">
          <Route path=":id" element={<EditPost 
          />} />
        </Route>
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
