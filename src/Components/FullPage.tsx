import React, { useEffect, useState } from "react";
import ReactPageScroller from "react-page-scroller";

import "./style.css";
import Intro from "./Intro";
import Body from "./Body";
import { Pagination } from "react-bootstrap";
import MBM from "./MBM";

const items = ["Intro", "Works", "MBM"];

export default class FullPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { currentPage: null };
  }

  handleBeforePageChange = (number: any) => {};
  handlePageChange = (number: any) => {
    this.setState({ currentPage: number });
  };
  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 0; i <= 3; i++) {
      pageNumbers.push(
        <Pagination.Item key={i} onClick={this.handlePageChange}>
          {items[i]}
        </Pagination.Item>
      );
    }

    return [...pageNumbers];
  };
  render() {
    const pageNumbers = this.getPagesNumbers();
    return (
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
        >
          <Intro />
          <Body />
          <MBM />
        </ReactPageScroller>

        <Pagination
          className="pagination-additional-class"
          onChange={this.handlePageChange}
        >
          {pageNumbers}
        </Pagination>
      </React.Fragment>
    );
  }
}
