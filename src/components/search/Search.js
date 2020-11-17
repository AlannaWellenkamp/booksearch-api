import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSearch}>
                <div className='text-search'>
                    <label htmlFor="form-text-search">Search:</label>
                    <input
                        id="form-text-search"
                        type="text"
                        placeholder="henry"
                    />
                    <button type="submit">Search</button>
                </div>

                <div className='selection-options'>
                    <label htmlFor="form-print-type">Print type:</label>
                    <select id="form-print-type">
                        <option value="all">all</option>
                        <option value="books">books</option>
                        <option value="magazines">magazines</option>
                    </select>
                    <label htmlFor="form-filter-type">Book type:</label>
                    <select id="form-filter-type" defaultValue="no filter">
                        <option value="no filter" disabled>
                            no filter
                    </option>
                        <option value="ebooks">ebooks</option>
                        <option value="free-ebooks">free-ebooks</option>
                        <option value="full">full</option>
                        <option value="paid-ebooks">paid-ebooks</option>
                        <option value="partial">partial</option>
                    </select>
                </div>
            </form>
        )
    }

}

export default Search;