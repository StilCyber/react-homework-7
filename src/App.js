import { useState } from "react";
import PostContainer from "./components/Post/PostContainer";
import PostForm from "./components/Post/PostForm";


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript'},
    {id: 2, title: 'Python'}
  ])

  const removePost = (item) => {
    setPosts(posts.filter(p => p.id !== item.id))
  }
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <PostContainer posts={posts} remove={removePost}/>
    </div>
  );
}

export default App;
