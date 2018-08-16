import React, { Component } from 'react';

export default class ListContacts extends Component {
  render() {
    console.log('Props', this.props);
    return (
      <div className="contact-list">
        <ol />
      </div>
    );
  }
}
