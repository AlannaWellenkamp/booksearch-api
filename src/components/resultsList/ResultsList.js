import React, { Component } from "react";
import ResultsItem from "../resultsItem/ResultsItem";

class ResultsList extends Component {
  render() {
    const books = this.props.results.items || [];

    return books.map( book => {
      const { title, description, imageLinks } = book.volumeInfo;

      const authors = book.volumeInfo.authors
        ? book.volumeInfo.authors.length > 1
          ? book.volumeInfo.authors.join( ', ' )
          : book.volumeInfo.authors
        : 'none'

      const amount = book.saleInfo.listPrice
        ? book.saleInfo.listPrice.amount
        : book.saleInfo.saleability.replace( /_/gi, " " ).toLowerCase();

      return ( <ResultsItem key={book.id} title={title} description={description} authors={authors} imageLinks={imageLinks} amount={amount}/> );
    } );
  }
}

export default ResultsList;