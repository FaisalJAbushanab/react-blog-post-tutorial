import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes as Switch, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    console.log(typeof search)
    const filteredResults = posts.filter(post => (
      (post.body).toLowerCase()).includes(search.toLocaleLowerCase())
      || ((post.title).toLocaleLowerCase()).includes(search.toLocaleLowerCase())
    )
    setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMM dd, yyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody }
    const allPosts = [...posts, newPost];
    setPosts(allPosts)
    setPostTitle('');
    setPostBody('');
    navigate('/')
  }
  const handleDelete = (id) => {
    const postList = posts.filter(post => post.id !== id)
    setPosts(postList)
    return navigate('/')

  }
  return (
    <div className="App">
      <Header title={"React Js Blog"} />
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/" element={<Home posts={searchResults} />} />
        <Route path="/post" element={
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />
        } />
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path="/about" element={<About />} />
        <Route exact path="*" element={<Missing />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
