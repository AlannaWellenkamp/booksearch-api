import React, { Component } from 'react';
import Header from './components/header/Header';
import Search from './components/search/Search';
import ResultsList from './components/resultsList/ResultsList';

const apiKey = 'AIzaSyAh3qOmUfBHR715Nm7abi3O-X5wiE9G4SY';

const baseUrl = `https://www.googleapis.com/books/v1/volumes?key=${apiKey}&q=`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      error: null
    }
  }

  handleSearch = (e) => {
    e.preventDefault();
    let fetchUrl;

    const searchString = document.getElementById('form-text-search').value;
    const printType = document.getElementById('form-print-type').value;
    const filterType = document.getElementById('form-filter-type').value;


    if (printType === 'no filter') {
      fetchUrl = `${baseUrl}${searchString}&printType=${printType}`;
    } else {
      fetchUrl = `${baseUrl}${searchString}&filter=${filterType}&printType=${printType}`;
    }

    fetch(fetchUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.')
        } else {
          return res;
        }
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    return (
      <div className='App'>
        <header>
          <Header />
        </header>
        <Search
          handleSearch={this.handleSearch}
          state={this.state}
        />
        <main>
          <ResultsList
            results={this.state.results}
          />
        </main>
      </div>
    );
  }
}

export default App;