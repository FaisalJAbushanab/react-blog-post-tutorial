import React, { useContext } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';
import DataContext from './context/DataContext';

const PostPage = () => {
    const {posts, api, setPosts} = useContext(DataContext)
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id)
    const navigate = useNavigate()

    const handleDelete = async (id) => {
        try{
          const response = await api.delete(`/posts/${id}`)
          console.log(response)
          const postList = posts.filter(post => post.id !== id)
          setPosts(postList)
          return navigate('/')
    
        }catch(err){
          console.log(`Error: ${err.message}`)
        }
      }

    return (
        <main className='PostPage'>
            <article className='post'>
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className='postDate'>{post.datetime}</p>
                        <p className='postBody'>{post.body}</p>
                        <Link to={`/post/edit/${post.id}`}>
                            <button className='editButton'> Edit Post </button>
                        </Link>
                        <button className="deleteButton" onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post NOt Found</h2>
                        <p>Well, that's dissapointing.</p>
                        <p>
                            <Link to="/">Vist our Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage