'use babel';

import React from 'react';

export default class Header extends React.Component {
  render() {
    return <h1>{this.props.value}</h1>;
  }
}
