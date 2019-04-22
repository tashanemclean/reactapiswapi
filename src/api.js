import React from "react";

import "./styles.css";

class Api extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("https://api.dailysmarty.com/posts")
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data.posts
        });
      })
      .catch(error => console.log(error));
  }

  renderPosts = () => {
    return this.state.posts.map(post => {
      return (
        <div>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </div>
      );
    });
  };

  render() {
    console.log(this.state.posts);
    return (
      <div>
        <h1>We love API</h1>
        {this.renderPosts()}
      </div>
    );
  }
}

export default Api;
