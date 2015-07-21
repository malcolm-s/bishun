'use babel';

import React from 'react';
import SearchResultItem from './SearchResultItem';

export default class SearchResults extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map((i) => <SearchResultItem key={i} />)}
      </div>
    );
  }
}
