import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAuthor: {},
      authors: authors,
      filteredAuthors: authors
    };
    this.selectAuthor = this.selectAuthor.bind(this);
    this.resetAuthor = this.resetAuthor.bind(this);
    this.filterAuthors = this.filterAuthors.bind(this);
  }

  selectAuthor(author) {
    this.setState({ currentAuthor: author });
  }

  checkAuthor(author) {
    if (author.first_name) {
      return <AuthorDetail author={author} />;
    } else {
      return (
        <AuthorsList
          filterAuthors={this.filterAuthors}
          selectAuthor={this.selectAuthor}
          authors={this.state.filteredAuthors}
        />
      );
    }
  }

  resetAuthor(author) {
    this.setState({ currentAuthor: {} });
  }

  filterAuthors(query) {
    const list = this.state.authors.filter(
      author =>
        author.first_name.toUpperCase().includes(query.toUpperCase()) ||
        author.last_name.toUpperCase().includes(query.toUpperCase())
    );
    this.setState({ filteredAuthors: list });
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar resetAuthor={this.resetAuthor} />
          </div>
          <div className="content col-10">
            {this.checkAuthor(this.state.currentAuthor)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
