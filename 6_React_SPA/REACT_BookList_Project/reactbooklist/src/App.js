import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import AddBook from './components/addBook/AddBook';
import BookList from './components/Table/BookList';
import Navbar from './components/UI/Navbar';
import ShowAlert from './components/UI/ShowAlert';

class App extends Component {
  state = {
    bookArray: [],
    alert: {}
  };

  getLocacStorage() {
    let data = JSON.parse(localStorage.getItem('data'));
    if (data !== null) {
      this.setState({ bookArray: data });
    }
  }
  setLocalStorage() {
    localStorage.setItem('data', JSON.stringify(this.state.bookArray));
  }
  sendAlert(type, massage) {
    this.setState({
      alert: {
        type: type,
        msg: massage
      }
    });
    setTimeout(() => {
      this.setState({ alert: {} });
    }, 5000);
  }

  componentDidUpdate() {
    this.setLocalStorage();
  }
  componentDidMount() {
    this.getLocacStorage();
  }
  createListItem = e => {
    e.preventDefault();
    if (
      e.target.title.value === '' ||
      e.target.author.value === '' ||
      e.target.isbn.value === ''
    ) {
      this.sendAlert('danger', 'Please fill out all inputs before submitting!');
    } else {
      this.setState({ alert: {} });
      this.state.bookArray.push({
        title: e.target.title.value,
        author: e.target.author.value,
        isbn: e.target.isbn.value
      });
      this.sendAlert('success', 'Book has been successfully added!');
      e.target.title.value = '';
      e.target.author.value = '';
      e.target.isbn.value = '';
    }
  };
  deleteItem = e => {
    const books = this.state.bookArray;
    books.forEach((book, i) => {
      if (book.isbn === e.target.parentNode.previousSibling.innerHTML) {
        books.splice(i, 1);
        this.sendAlert('success', 'Book has been successfully deleted!');
      }
    });
    this.setState({ bookArray: books });
  };

  render() {
    return (
      <Router>
        <div className={'App'}>
          <Navbar />
          <ShowAlert alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path='/'
              render={props => <AddBook createListItem={this.createListItem} />}
            />
            <Route
              exact
              path='/Table'
              render={props => (
                <BookList
                  bookArray={this.state.bookArray}
                  deleteItem={this.deleteItem}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
