import React, { Component } from "react";
import { connect } from "react-redux";

import { loadJobs } from "../../../actions";
import "./Pagination.css";

class Pagination extends Component {
  componentDidMount() {}

  handleSelect = pageSelected => {
    const { jobs } = this.props;
    const { query, page, total_pages } = jobs;
    if (pageSelected === "<") {
      pageSelected = page - 5;
      pageSelected = pageSelected < 1 ? 1 : pageSelected;
    }
    if (pageSelected === ">") {
      pageSelected = page + 5;
      pageSelected = pageSelected > total_pages ? total_pages : pageSelected;
    }
    this.props.loadJobs(query, pageSelected);
  };

  listItem(key, label, isCurrentPage) {
    if (label === "...") {
      return (
        <li className="PaginationItem dots" key={key}>
          {label}
        </li>
      );
    }
    return (
      <li className="PaginationItem" key={key}>
        <button
          className={`Page${isCurrentPage ? " active" : ""}`}
          onClick={() => this.handleSelect(label)}
        >
          {label}
        </button>
      </li>
    );
  }

  listPages() {
    let size = 4;
    let firstJump = false;
    const { jobs } = this.props;
    const { page, total_pages } = jobs;

    if (page >= 20) {
      firstJump = true;
      size = 3;
    }

    let pages = [];
    let start_page = page - 2;
    if (start_page < 1) start_page = 1;

    const end_page =
      total_pages < start_page + size ? total_pages : start_page + size;

    if (total_pages === 0) {
      return pages;
    }

    pages.push(this.listItem("-1", "<"));

    if (firstJump) {
      pages.push(this.listItem("-2", 1));
      pages.push(this.listItem("-3", "..."));
    }

    for (let i = start_page; i <= end_page; i++) {
      const isCurrentPage = page === i;
      pages.push(this.listItem(i, i, isCurrentPage));
    }

    if (page + size < total_pages) {
      pages.push(this.listItem("-4", "..."));
      pages.push(this.listItem("-5", total_pages));
    }

    pages.push(this.listItem("-6", ">"));

    return pages;
  }

  render() {
    return (
      <div className="PaginationContainer">
        <ul className="PaginationList">{this.listPages()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ jobs }) => ({ jobs });

const mapDispatchToProps = dispatch => ({
  loadJobs: (filter, page) => dispatch(loadJobs(filter, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
