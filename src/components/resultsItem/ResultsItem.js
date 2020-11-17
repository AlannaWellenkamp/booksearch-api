import React, { Component } from 'react';
import './ResultsItem.css';

class ResultsItem extends Component {
    render() {
        return (<section>
            <h3 className="book-title">{this.props.title}</h3>
            <div className="book-display">
                <img src={this.props.imageLinks.thumbnail} className="flex-5" alt={`book cover of ${this.props.title}`} />
                <div className="book-info flex-1">
                    <p className="author-title flex-1">Author: {this.props.authors}</p>
                    <p className="price-tag flex-1">Price: {this.props.amount}</p>
                    <p className="description flex-1">{this.props.description}</p>
                </div>
            </div>
            <br />
        </section>);
    }
}

export default ResultsItem;