import React, { useEffect, useState } from "react";
import ReactPageScroller from "react-page-scroller";

import "./style.css";
import Intro from "./Intro";
import Body from "./Body";
import { Pagination } from "react-bootstrap";
import MBM from "./MBM";

const items = ["Home", "Works", "MBM"];

export default class FullPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { currentPage: null };
  }

  handleBeforePageChange = (number: any) => {};
  handlePageChange = (number: any) => {
    this.setState({ currentPage: number });
  };
  page1 = () => {
    this.setState({ currentPage: 0 });
  };
  page2 = () => {
    this.setState({ currentPage: 1 });
  };
  getPagesNumbers = () => {
    const pageNumbers = [];

    pageNumbers.push(
      <Pagination.Item key={1} onClick={this.page1}>
        {items[0]}
      </Pagination.Item>
    );

    return [pageNumbers];
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
          onClick={this.page1}
        >
          {pageNumbers[0]}
        </Pagination>
        <Pagination
          className="pagination-additional-class"
          onChange={this.handlePageChange}
          onClick={this.page2}
        >
          {pageNumbers[1]}
        </Pagination>
      </React.Fragment>
    );
  }
}
