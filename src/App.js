import React, { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [newImage, setNewImage] = useState('');
  const [replies, setReplies] = useState({});
  const [replyText, setReplyText] = useState('');

  const handlePostSubmit = () => {
    if (newPost || newImage) {
      const post = {
        id: Date.now(),
        text: newPost,
        image: newImage,
        replies: [],
      };
      setPosts([...posts, post]);
      setNewPost('');
      setNewImage('');
    }
  };

  const handleReplySubmit = (postId) => {
    if (replyText) {
      const reply = {
        id: Date.now(),
        text: replyText,
      };
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          return { ...post, replies: [...post.replies, reply] };
        }
        return post;
      });
      setPosts(updatedPosts);
      setReplyText('');
    }
  };

  return (
    <div className="App">
      <h1>Community Section</h1>
      <div>
        <h2>Create a Post</h2>
        <textarea
          placeholder="Write your post..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>
      <div>
        <h2>Posts</h2>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.text}</p>
            {post.image && <img src={post.image} alt="Post" />}
            <div>
              <input
                type="text"
                placeholder="Reply to this post..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <button onClick={() => handleReplySubmit(post.id)}>Reply</button>
            </div>
            {post.replies.map((reply) => (
              <div key={reply.id} className="reply">
                <p>{reply.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
