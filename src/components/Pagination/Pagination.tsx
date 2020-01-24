import React from "react";
import { leadingZero } from "../../utils/index.ts";

interface PaginationProps {
    numPages: number;
    currentPage: number;
    handleClick(value: number): void;
}

export default class Pagination extends React.Component<PaginationProps> {
    render() {
        return (
            <div className="pagination">
                <div className="pagination__indicators">
                    {this.paginationList()}
                </div>
                <span className="pagination__numbers">
                    <span className="pagination__current">
                        {}
                        {leadingZero(this.props.currentPage + 1)}
                    </span>
                    <span className="pagination__total">
                        {leadingZero(this.props.numPages)}
                    </span>
                </span>
            </div>
        );
    }

    paginationList() {
        let pageBtns = [];
        for (let i = 0; i < this.props.numPages; i++) {
            pageBtns.push(
                <button
                    className={`pagination__indicator ${this.pageIsActive(i) &&
                        "pagination__indicator--active"}`}
                    key={i}
                    onClick={() => {
                        this.props.handleClick(i);
                    }}
                />
            );
        }
        return pageBtns;
    }

    pageIsActive(page) {
        return page === this.props.currentPage;
    }
}
