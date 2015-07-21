'use babel';

import React from 'react';

export default class Loader extends React.Component {
  constructor() {
    super();
    this.state = { loaded: false };
  }

  componentDidMount() {
    this.props.promise
      .then(() => {
        this.setState({ loaded: true })
      });
  }

  render() {
    if (this.state.loaded) {
      return this.props.children;
    } else {
      return (
        <div cssClass="loader">
          <img src='http://www.decodeunicode.org/de/u+27f3/data/glyph/196x196/27F3.gif' cssClass='spinner'/>
        </div>
      )
    }
  }
}
