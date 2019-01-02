import React, { Component } from "react";

class BookRow extends Component {
  render() {
    const author = this.props.author;
    return (
      <tr>
        <td>{this.props.book.title}</td>
        <td>
          {this.props.author.first_name} {this.props.author.last_name}
        </td>
        <td>{this.props.book.color}</td>
      </tr>
    );
  }
}
export default BookRow;
