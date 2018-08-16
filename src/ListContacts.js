import React, { Component } from 'react';

export default class ListContacts extends Component {
  render() {
    return (
      <div className="contact-list">
        <ol>
          {this.props.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ol>
      </div>
    );
  }
}
