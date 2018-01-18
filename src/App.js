import React, { Component } from 'react';
import Comment from './Comment.js';
import Author from './Author.js';
import './App.css';

class Post extends Component {
  // want to attach a value to component? needs to be done through constructor function
  constructor(props){
    super(props)
    // let this.x = 25;
    this.state = {
      moodPoints: 1
    }
  }
   //makes sense to write on one line
  increaseMood(e){
    // if(this.state.moodPoints <= 9){
    //   this.setState({moodPoints: this.state.moodPoints + 1})
    //  }else{
    //   this.setState({moodPoints:  1})
    // }
    
    //Ternery Operator is way better than if / else
    this.state.moodPoints <= 9?this.setState({moodPoints: this.state.moodPoints + 1}):this.setState({moodPoints:  1})

  }


  render() {
    const myPosts = this.props.posts.map(p => {
      return <div key={p.title}>
              <h1 className="Title">{p.title}</h1>
              <Author authors={p.authors} />
              <p className="Post-intro">
                {p.content}
              </p>
              <h2>Comments</h2>
              <Comment comments={p.comments} />
              <hr />
            </div>
    });

    return (
      <div className="Post">
        <header className="Post-header">
          <img src="../dino_logo.png" className="Post-logo" alt="logo" />
          <h1 className="Post-title">Dino Blog</h1>
          <p className="Post-intro">
            All the latest and greatest things from 65 million years ago.
          </p>
        </header>
        <h3>On a scale of 1 to 10, this is how I feel...</h3>
        <p>Current Mood: {this.state.moodPoints}</p>
        <button onClick={(e)=> this.increaseMood(e)}>Jolly Butt's</button>
        {myPosts}
        <em>Note, at this stage, we are only rendering ONE post with ONE comment!</em>
      </div>
    );
  }
}

export default Post;
