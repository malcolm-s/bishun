'use babel';

import React from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

export default class StrokeSearch extends React.Component {
  render() {
    return (
      <div>
        <SearchInput />
        <SearchResults items={[1,2,3]} />
      </div>
    );
  }
}
