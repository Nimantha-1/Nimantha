import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
    <div><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e" crossorigin="anonymous"></link>
    <h1> Community Section</h1>
    <div class="panel">
            <div class="panel-heading">
                <h3 class="panel-title">Create a Post </h3>
            </div>
            <div class="panel-content panel-activity">
                <form action="#" class="panel-activity__status">
                    <textarea name="user_activity" placeholder="Share what you've been up to..." class="form-control"></textarea>
                    <div class="actions">
                        <div class="btn-group">
                            <button type="button" class="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Image">
                                <i class="fa fa-image"></i>
                            </button>
                            
                            <button type="button" class="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Question">
                                <i class="fa fa-question-circle-o"></i>
                            </button>
                        </div>
                        <button type="submit" class="btn btn-sm btn-rounded btn-info">
                            Post
                        </button>
                    </div>
                </form>
        </div>
</div>
<h2> Posted Area </h2>
<div class="area">
<form action="#" class="area_post">
<div class="panel">
            <div class="panel-heading">
                <h3 class="panel-title"> Your Post </h3>
            </div>
            <div class="panel-content panel-activity">
                <form action="#" class="panel-activity__status">
                    <img src="https://th.bing.com/th/id/R.17b33d455795f7955f374703ec5db7ec?rik=NxSsDRRowb8cGw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fngPEfyE.jpg&ehk=H8cSGsfjlgPQaG1%2f3Ozt2CphyeUbP7kRRn7Dc8mef9s%3d&risl=&pid=ImgRaw&r=0"></img>
                    <div class="actions">
                        <div class="btn-group">
                           <text> Your community Area </text>
                        </div>
                      
                    </div>
                    <textarea placeholder='Comment: '></textarea>
                  
                    <div class="btn-group">
                            <button type="button" class="btn-link" title="" data-toggle="tooltip" data-original-title="Like">
                            <i class="bi bi-hand-thumbs-up-fill"></i>
                            </button>
                            
                            <button type="button" class="btn-link" title="" data-toggle="tooltip" data-original-title="Comment">
                            <i class="bi bi-chat-left-text-fill"></i>
                            </button>

                            <button type="button" class="btn-link" title="" data-toggle="tooltip" data-original-title="">
                            <i class="bi bi-chat-heart-fill"></i>
                            </button>
                        </div>
                      
                </form>
        </div>
</div>
  
</form>
</div>
</div>
  );
}

export default App;


