'use babel';

import React from 'react';
import Header from './Header';
import StrokeSearch from './StrokeSearch/StrokeSearch';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header value="BISHUN 笔顺" />
        <StrokeSearch />
      </div>
    )
  }
}
