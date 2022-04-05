import React from 'react';
import './App.css';

class App extends React.Component{
  state={
    posts:[]
  }
  componentDidMount(){
    this.loadPosts();
  }

  loadPosts = async() => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const [posts] = await Promise.all([postsResponse])
    const postsJson = await posts.json();
    this.setState({posts:postsJson})
  }

  render(){
    var tasks = this.state.todoList
    var self = this
    const { posts } = this.state;
      return(
        <div className="App">

          <div id="task-container">
              {posts.map(post => (
                <div key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  
                </div>  
              ))}
          </div>
          
        </div>
      )
    }
  }


export default App;
