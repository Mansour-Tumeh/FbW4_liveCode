import React, { Component } from 'react';

class titleHeader extends Component {
  state = {
    title: ''
  };
  //https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
  static getDerivedStateFromProps(props, state) {
    console.log('sync state with props');
    console.log('current state ', state.title);
    console.log('new props ', props.newTitle);
    if (state.title !== props.newTitle) {
      return {
        title: props.newTitle
      };
    } else {
      return null;
    }
  }

  render() {
    console.log('component is rendered ', this.state.title);
    return <h1>{this.state.title}</h1>;
  }
  //https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    console.log('component did mount  ');
    let header = document.querySelector('h1');
    header.style.background = 'yellow';
  }
  //https://reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate() {
    console.log('component did mount  ');
    let header = document.querySelector('h1');
    header.style.background = 'green';
  }

  //https://reactjs.org/docs/react-component.html#componentwillunmount
  componentWillUnmount() {
    console.log('component will unmount');
    alert('component will unmount');
    this.setState({
      title: ''
    });
  }
}

export default titleHeader;
